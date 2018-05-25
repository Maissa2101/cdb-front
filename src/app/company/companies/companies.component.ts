import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {CompanyService} from '../company.service';
import {Company} from '../company.model';
import {InputMetadataWalker} from 'codelyzer/noInputRenameRule';
import { MatPaginator, MatSort, MatTableDataSource, MatSnackBar } from '@angular/material';
import {merge, Observable, of as observableOf} from 'rxjs';
import {catchError, map, startWith, switchMap} from 'rxjs/operators';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent implements OnInit {

  displayedColumns = ['select', 'id', 'name', 'logo'];
  dataSource : MatTableDataSource<Company>;
  selection = new SelectionModel<Company>(true, []);
  companies : Company[] = [];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private companyService: CompanyService, public snackBar: MatSnackBar) {
  }

  ngOnInit() {
    this.companyService.getCompanies()
      .subscribe(
        companies => {
          this.companies = companies;
          this.dataSource = new MatTableDataSource(this.companies);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        },
        error =>  {
          console.error('Problem in getting the company', error);
          this.snackBar.open("Can't reach the database. Press 'F5' to refresh.", "Close", {
            panelClass: 'snackbar-error',
            duration: 2500,});
        } );
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue;
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
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
