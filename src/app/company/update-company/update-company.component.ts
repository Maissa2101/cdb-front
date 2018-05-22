import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CompanyService} from '../company.service';
import {Company} from '../company.model';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-update-company',
    templateUrl: './update-company.component.html',
    styleUrls: ['./update-company.component.css']
})
export class UpdateCompanyComponent implements OnInit {

    id: number;
    companyForm: FormGroup;
    company: Company = new Company();

    constructor(private route:ActivatedRoute, private companyService: CompanyService, private fb: FormBuilder) {
        this.createForm();
    }

    ngOnInit() {
      this.id = +this.route.snapshot.paramMap.get('id');
      this.companyService.getById(this.id)
          .subscribe(company => this.company = company,
              error => console.error('Problem in getting the company', error)
          );
    }

    onSubmit(company: Company) {
      this.company.logo = this.companyForm.controls.logo.value;
      if (this.companyForm.controls.name.value) {
        this.company.name = this.companyForm.controls.name.value;
      }
      this.companyService.updateCompany(this.company)
        .subscribe(() => console.log('company updated'),
          error => console.error('Problem in update company', error));
    }

    createForm() {
        this.companyForm = this.fb.group({
            name: '',
            logo: ['', Validators.pattern(/(http)?s?:?(\/\/[^"']*\.(?:png|jpg|jpeg|gif|png|svg))/)]
        });
    }

}
