import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ComputerService} from '../computer.service';
import {Computer} from '../computer.model';
import {ActivatedRoute, Router} from '@angular/router';
import {MatSnackBar} from '@angular/material';
import {Company} from '../../company/company.model';
import {CompanyService} from '../../company/company.service';

@Component({
  selector: 'app-create-computer',
  templateUrl: './create-computer.component.html',
  styleUrls: ['./create-computer.component.css']
})
export class CreateComputerComponent implements OnInit {

  id: number;
  computerForm: FormGroup;
  computer: Computer = new Computer();
  companies: Company[] = [];

  constructor(private computerService: ComputerService, private companyService: CompanyService, private fb: FormBuilder, public snackBar: MatSnackBar, private router: Router) {
    this.createForm();
  }

  ngOnInit() {
    this.companyService.getCompanies()
      .subscribe(
        companies => {
          this.companies = companies;
        },
        error => {
          this.snackBar.open('Can\'t reach the database. Press F5 to refresh.', 'close', {
            panelClass: 'snackbar-error',
            duration: 2500,
          });
        });
  }

  onSubmit(computer: Computer) {
    if (this.computerForm.controls.name.value) {
      this.computer.name = this.computerForm.controls.name.value;
      this.computer.introduced = this.computerForm.controls.introduced.value;
      this.computer.discontinued = this.computerForm.controls.discontinued.value;
      if (this.computerForm.controls.company.value !== '-1') {
        this.companies.forEach(localCompany => {
          if (localCompany.id === +this.computerForm.controls.company.value) {
            this.computer.company = localCompany;
          }
        });
      }
      ;
    }
    this.computerService.addComputer(this.computer)
      .subscribe(() => {
          this.snackBar.open('The computer has been added to database.', 'Close', {
            panelClass: 'snackbar-ok',
            duration: 2500
          });
        this.router.navigate([`/computers/`]);
        }, error => {
          this.snackBar.open('Can\'t add the computer. Please try again.', 'Close', {
            panelClass: 'snackbar-error',
            duration: 2500
          });
        }
      );
  }

  createForm() {
    this.computerForm = this.fb.group({
      name: '',
      introduced: '',
      discontinued: '',
      company: ''
    });
  }

}
