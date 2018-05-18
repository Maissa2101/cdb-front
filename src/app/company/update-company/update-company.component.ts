import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CompanyService} from '../company.service';
import {Company} from '../company.model';

@Component({
    selector: 'app-update-company',
    templateUrl: './update-company.component.html',
    styleUrls: ['./update-company.component.css']
})
export class UpdateCompanyComponent implements OnInit {

    companyForm: FormGroup;

    constructor(private companyService: CompanyService, private fb: FormBuilder) {
        this.createForm();
    }

    ngOnInit() {
    }

    onSubmit(company: Company) {
        company.name = this.companyForm.controls.name.value;
        company.logo = this.companyForm.controls.logo.value;
        this.companyService.updateCompany(company)
            .subscribe(() => console.log('Company updated'),
                error => console.error('Error in updating the company'));
    }

    createForm() {
        this.companyForm = this.fb.group({
            name: ['', Validators.required],
            logo: '',
        });
    }

}
