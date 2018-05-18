import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CompanyService } from '../company.service';
import { Company } from '../company.model';

@Component({
  selector: 'app-create-company',
  templateUrl: './create-company.component.html',
  styleUrls: ['./create-company.component.css']
})
export class CreateCompanyComponent {
  companyGroup: FormGroup;

  constructor(private companyService: CompanyService, private formBuilder: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.companyGroup = this.formBuilder.group({
    name: ["", Validators.required],
    logo: ""
    })
  }

  onSubmit() {
    let value = this.companyGroup.value;
    let company: Company = {
      id: 0,
      name: value.name,
      logo: value.logo
    };
    this.companyService.addCompany(company);
  }

}
