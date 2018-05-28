import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ComputerService} from '../computer.service';
import {Computer} from '../computer.model';
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { Company } from '../../company/company.model';
import { CompanyService } from '../../company/company.service';

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

    constructor(private computerService: ComputerService, private companyService: CompanyService, private fb: FormBuilder, public snackBar: MatSnackBar) {
        this.createForm();
    }

    ngOnInit() {
      this.companyService.getCompanies()
        .subscribe(
          companies => {
            this.companies = companies;
          },
          error =>  {
            console.error('Problem in getting the company', error);
            this.snackBar.open('Can\'t reach the database. Press F5 to refresh.', 'close', {
              panelClass: 'snackbar-error',
              duration: 2500,});
          } );
    }

    onSubmit(computer: Computer) {
      if (this.computerForm.controls.name.value) {
        this.computer.name = this.computerForm.controls.name.value;
        this.computer.introduced = this.computerForm.controls.introduced.value;
        this.computer.discontinued = this.computerForm.controls.discontinued.value;
        this.computer.company = this.computerForm.controls.company.value;
      }
      this.computerService.updateComputer(this.computer)
        .subscribe(() => { console.log('computer updated');
          this.snackBar.open("The computer has been updated.", "Close", {
            panelClass: 'snackbar-ok',
            duration: 2500});
        }, error => { console.error('Problem in update computer', error);
          this.snackBar.open("Can't update the computer. Please try again.", "Close", {
            panelClass: 'snackbar-error',
            duration: 2500})
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
