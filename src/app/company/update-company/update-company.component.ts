import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CompanyService} from '../company.service';
import {Company} from '../company.model';
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
    selector: 'app-update-company',
    templateUrl: './update-company.component.html',
    styleUrls: ['./update-company.component.css']
})
export class UpdateCompanyComponent implements OnInit {

    id: number;
    companyForm: FormGroup;
    company: Company = new Company();

    constructor(private route:ActivatedRoute, private companyService: CompanyService, private fb: FormBuilder, public snackBar: MatSnackBar) {
        this.createForm();
    }

    ngOnInit() {
      this.id = +this.route.snapshot.paramMap.get('id');
      this.companyService.getById(this.id)
      .subscribe(company => this.company = company,
        error => { console.error('Problem in getting the company', error);
            this.snackBar.open("Can't reach the database. Press 'F5' to refresh.", "Close", {
              panelClass: 'snackbar-error',
              duration: 2500,});
        }
      );
    }

    onSubmit(company: Company) {
      this.company.logo = this.companyForm.controls.logo.value;
      if (this.companyForm.controls.name.value) {
        this.company.name = this.companyForm.controls.name.value;
      }
      this.companyService.updateCompany(this.company)
        .subscribe(() => { console.log('company updated');
          this.snackBar.open("The company has been updated.", "Close", {
            panelClass: 'snackbar-info',
            duration: 2500});
        }, error => { console.error('Problem in update company', error);
          this.snackBar.open("Can't update the company. Please try again.", "Close", {
            panelClass: 'snackbar-error',
            duration: 2500})
        }
      );
    }

    createForm() {
        this.companyForm = this.fb.group({
            name: '',
            logo: ['', Validators.pattern(/(http)?s?:?(\/\/[^"']*\.(?:png|jpg|jpeg|gif|png|svg))/)]
        });
    }

}
