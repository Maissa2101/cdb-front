import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {CompanyService} from '../company.service';
import {Company} from '../company.model';
import {InputMetadataWalker} from 'codelyzer/noInputRenameRule';
import { MatPaginator, MatSort } from '@angular/material';
import {merge, Observable, of as observableOf} from 'rxjs';
import {catchError, map, startWith, switchMap} from 'rxjs/operators';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent implements OnInit {
  displayedColumns = ['id', 'name', 'logo'];
  companies: Company[] = [];

  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private companyService: CompanyService) {}

  ngOnInit() {
  }

  ngAfterViewInit() {
    // If the user changes the sort order, reset back to the first page.
    this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);
    this.paginator.length = 100;
    merge(this.sort.sortChange, this.paginator.page)
      .pipe(
        startWith({}),
        switchMap(() => {
          this.isLoadingResults = true;
          let sortName: string;
          if (this.sort.active === "name") {
            sortName = "ca_name";
          } else {
            sortName = "ca_id";
          }
          return this.companyService!.getCompaniesPage(
            sortName, this.sort.direction, this.paginator.pageIndex, this.paginator.length);
        }),
        map(companies => {
          // Flip flag to show that loading has finished.
          this.isLoadingResults = false;
          this.isRateLimitReached = false;
          this.resultsLength = companies.length;

          return companies;
        }),
        catchError(() => {
          this.isLoadingResults = false;
          this.isRateLimitReached = true;
          return observableOf([]);
        })
      ).subscribe(companies => this.companies = companies);
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.companies.filter(company => company.name.search(filterValue) !== -1)
    if (this.paginator) {
      this.paginator.firstPage();
    }
  }

  delete(company: Company) {
    const i = this.companies.indexOf(company);
    this.companies.splice(i, 1);
  }

  deleteMultiple(companies: Company[]) {
    companies.forEach(company =>
      this.delete(company));
  }

}
