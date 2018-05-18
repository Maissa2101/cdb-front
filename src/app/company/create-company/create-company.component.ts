import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CompanyService} from '../company.service';
import {Company} from '../company.model';

@Component({
  selector: 'app-create-company',
  templateUrl: './create-company.component.html',
  styleUrls: ['./create-company.component.css']
})
export class CreateCompanyComponent {
  companyGroup: FormGroup;

  company = new Company();

  constructor(private companyService: CompanyService, private formBuilder: FormBuilder) {
    this.createForm();
  }

  onSubmit() {
    this.company.name = this.companyGroup.controls.name.value;
    this.company.logo = this.companyGroup.controls.logo.value;
    this.companyService.addCompany(this.company)
      .subscribe(() => console.log('new company added'),
        error => console.error('Problem in add new company', error));
  }

  createForm() {
    this.companyGroup = this.formBuilder.group({
      name: ['', Validators.required],
      logo: '',
    });
  }
}


