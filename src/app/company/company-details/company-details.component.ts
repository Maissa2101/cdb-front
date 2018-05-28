<<<<<<< HEAD
import {Component, OnInit} from '@angular/core';
import {Company} from '../company.model';
import {CompanyService} from '../company.service';
import {ActivatedRoute, Router} from '@angular/router';
import {MatSnackBar} from '@angular/material';
=======
import { Component, OnInit } from "@angular/core";
import { Company } from "../company.model";
import { CompanyService } from "../company.service";
import { ActivatedRoute } from "@angular/router";
import { MatSnackBar } from "@angular/material";
>>>>>>> feature/handle-404

@Component({
  selector: "app-company-details",
  templateUrl: "./company-details.component.html",
  styleUrls: ["./company-details.component.css"]
})
export class CompanyDetailsComponent implements OnInit {
  id: number;
  company: Company;

  constructor(private companyService: CompanyService, private route: ActivatedRoute, private router: Router, public snackBar: MatSnackBar) {
    this.id = +this.route.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this.companyService.getById(this.id)
      .subscribe(company => this.company = company,
        error =>  {
          if (error.status == 404) {
            console.error();
            this.snackBar.open('This page does not exist.', 'Close', {
              panelClass: 'snackbar-error',
              duration: 2500,});
          } else if (error.status > 499) {
            this.snackBar.open('Can\'t reach the database. Press F5 or try later.', 'Close', {
              panelClass: 'snackbar-error',
              duration: 2500,});
          } else {
            this.snackBar.open(error.status + ': Press F5 or try later.', 'Close', {
              panelClass: 'snackbar-error',
              duration: 2500,});
          }
          this.router.navigate([`/companies/`]);
      } );
  }

  delete(company: Company) {
    this.companyService.deleteCompany(company.id).subscribe(
      () => {},
      error => {
        console.error("Problem in getting the company", error);
        this.snackBar.open("Can't delete the company. Try again.", "close", {
          panelClass: "snackbar-error",
          duration: 2500
        });
      }
    );
  }

  isConnected(): boolean {
    if (localStorage.getItem("token")) {
      return true;
    }
    return false;
  }
}
