import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ComputerService} from '../computer.service';
import {Computer} from '../computer.model';
import {ActivatedRoute, Router} from '@angular/router';
import {MatSnackBar} from '@angular/material';
import {Company} from '../../company/company.model';
import {CompanyService} from '../../company/company.service';

@Component({
  selector: 'app-update-computer',
  templateUrl: './update-computer.component.html',
  styleUrls: ['./update-computer.component.css']
})
export class UpdateComputerComponent implements OnInit {

  id: number;
  computerForm: FormGroup;
  computer: Computer = new Computer();
  companies: Company[] = [];
  selectedValue: String;

  constructor(private route: ActivatedRoute, private router: Router, private computerService: ComputerService, private companyService: CompanyService, private fb: FormBuilder, public snackBar: MatSnackBar) {
    this.createForm();
  }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.computerService.getById(this.id)
      .subscribe(computer => {
          this.computer = computer;
          this.selectedValue = this.computer.company.id.toString();
        }, error => {
          if (error.status > 499) {
            this.snackBar.open('Can\'t reach the database. Press F5 or try later.', 'Close', {
              panelClass: 'snackbar-error',
              duration: 2500
            });
          } else {
            this.snackBar.open('This id does not exist.', 'Close', {
              panelClass: 'snackbar-error',
              duration: 2500
            });
          }
          this.router.navigate([`/computers/`]);
        }
      );
    this.companyService.getCompanies()
      .subscribe(
        companies => {
          this.companies = companies;
        },
        error => {
          this.snackBar.open('Can\'t reach the database. Press F5 to refresh.', 'close', {
            panelClass: 'snackbar-error',
            duration: 2500
          });
          this.router.navigate([`/computers/`]);
        });
  }

  onSubmit(computer: Computer) {
    if (this.computerForm.controls.name.value) {
      this.computer.name = this.computerForm.controls.name.value;
    }
    if (this.computerForm.controls.company.value !== '-1') {
      this.companies.forEach(localCompany => {
        if (localCompany.id === +this.computerForm.controls.company.value) {
          this.computer.company = localCompany;
        }
      });
    } else {
      this.computer.company = null;
    }
    this.computer.introduced = new Date(this.computerForm.controls.introduced.value).toISOString().substring(0, 10);
    this.computer.discontinued = new Date(this.computerForm.controls.discontinued.value).toISOString().substring(0, 10);
    this.computerService.updateComputer(this.computer)
      .subscribe(() => {
          this.snackBar.open('The computer has been updated.', 'Close', {
            panelClass: 'snackbar-ok',
            duration: 2500
          });
          this.router.navigate([`/computers/` + this.id]);
        }, error => {
          if (error.status === 400) {
            this.snackBar.open(error.error, 'Close', {
              panelClass: 'snackbar-error',
              duration: 2500
            });
          } else {
            this.snackBar.open('Can\'t update the computer. Please try again.', 'Close', {
              panelClass: 'snackbar-error',
              duration: 2500
            });
          }
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
