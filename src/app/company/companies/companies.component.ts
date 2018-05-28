import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {CompanyService} from '../company.service';
import {Company} from '../company.model';
import { MatPaginator, MatSort, MatTableDataSource, MatSnackBar } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import {Router} from '@angular/router';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent implements OnInit {

  displayedColumns = ['select', 'id', 'name', 'logo'];
  dataSource: MatTableDataSource<Company>;
  selection = new SelectionModel<Company>(true, []);
  companies: Company[] = [];

  @Input()
  display = false;

  @Output() deleteR = new EventEmitter<Company>();

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private companyService: CompanyService, public snackBar: MatSnackBar, private router: Router) {
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
          this.snackBar.open('Can\'t reach the database. Press F5 to refresh.', 'close', {
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

  isOneSelected() {
    this.display = true;
    return true;
  }

  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }

  delete(company: Company) {
    this.companyService.deleteCompany(company.id).subscribe(
      () => {
      },
      error =>  {
        console.error('Problem in getting the company', error);
        this.snackBar.open('Can\'t delete the company. Try again.', 'close', {
          panelClass: 'snackbar-error',
          duration: 2500});
      } );
  }

  deleteMultiple() {
    this.selection.selected.forEach(company => this.delete(company) );
  }


  selectRow(id) {
    this.router.navigate([`/companies/` + id]);
  }
}
