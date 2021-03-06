import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CompanyService} from '../company.service';
import {Company} from '../company.model';
import { MatSnackBar } from '@angular/material';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-company',
  templateUrl: './create-company.component.html',
  styleUrls: ['./create-company.component.css']
})
export class CreateCompanyComponent {
  companyGroup: FormGroup;

  company = new Company();

  constructor(private companyService: CompanyService, private formBuilder: FormBuilder, public snackBar: MatSnackBar, private router: Router) {
    this.createForm();
  }

  onSubmit() {
    this.company.name = this.companyGroup.controls.name.value;
    this.company.logo = this.companyGroup.controls.logo.value;
    this.companyService.addCompany(this.company)
      .subscribe(() => {
        this.snackBar.open('New company added to database.', 'Close', {
          panelClass: 'snackbar-ok',
          duration: 2500,
        });
        this.router.navigate([`/companies/`]);
      }, error => {
        this.snackBar.open('Problem in adding company, please try again.', 'Close', {
          panelClass: 'snackbar-error',
          duration: 2500,
        });
      } );
  }

  createForm() {
    this.companyGroup = this.formBuilder.group({
      name: ['', Validators.required],
      logo: ['', Validators.pattern(/(http)?s?:?(\/\/[^"']*\.(?:png|jpg|jpeg|gif|png|svg))/)]
    });
  }
}
