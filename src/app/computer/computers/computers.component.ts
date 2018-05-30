import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {ComputerService} from '../computer.service';
import {Computer} from '../computer.model';
import { MatPaginator, MatSort, MatTableDataSource, MatSnackBar } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import {Router} from '@angular/router';

@Component({
  selector: 'app-computers',
  templateUrl: './computers.component.html',
  styleUrls: ['./computers.component.css']
})
export class ComputersComponent implements OnInit {

  displayedColumns = ['select', 'id', 'name', 'introduced', 'discontinued', 'manufactor'];
  dataSource: MatTableDataSource<Computer>;
  selection = new SelectionModel<Computer>(true, []);
  computers: Computer[] = [];

  @Output() deleteR = new EventEmitter<Computer>();

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private computerService: ComputerService, public snackBar: MatSnackBar, private router: Router) {
  }

  ngOnInit() {
    this.computerService.getComputers()
      .subscribe(
        computers => {
          this.computers = computers;
          this.dataSource = new MatTableDataSource(this.computers);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        },
        error =>  {
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

  isConnected(): boolean {
    if (localStorage.getItem('token')) {
      return true;
    }
    return false;
  }


  delete(computer: Computer) {
    this.computerService.deleteComputer(computer.id).subscribe(
      () => {
        this.snackBar.open('Computer(s) deleted.', 'close', {
          panelClass: 'snackbar-info',
          duration: 2500});
      }, error =>  {
        this.snackBar.open('Can\'t delete the computer. Try again.', 'close', {
          panelClass: 'snackbar-error',
          duration: 2500});
      } );
  }

  deleteMultiple() {
    if (this.selection.selected.length > 0) {
      if (confirm('Are you sure to delete these computers ?')) {
        this.selection.selected.forEach(computer => this.delete(computer));
        window.location.reload();
      }
    }
  }


  selectRow(id) {
    this.router.navigate([`/computers/` + id]);
  }
}
