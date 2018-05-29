import {Component, OnInit} from '@angular/core';
import {Computer} from '../computer.model';
import {ComputerService} from '../computer.service';
import {ActivatedRoute, Router} from '@angular/router';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-computer-details',
  templateUrl: './computer-details.component.html',
  styleUrls: ['./computer-details.component.css']
})
export class ComputerDetailsComponent implements OnInit {

  id: number;
  computer: Computer;

  constructor(private computerService: ComputerService, private route: ActivatedRoute, private router: Router, public snackBar: MatSnackBar) {
    this.id = +this.route.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this.computerService.getById(this.id)
      .subscribe(computer => this.computer = computer,
        error =>  {
          if (error.status == 404) {
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
          this.router.navigate([`/computers/`]);
      } );
  }

  delete(computer: Computer) {
    this.computerService.deleteComputer(computer.id).subscribe(
      () => {
        this.snackBar.open('Computer "' + computer.name + '" deleted.', 'close', {
                panelClass: 'snackbar-info',
                duration: 2500});
      }, error =>  {
        this.snackBar.open('Can\'t delete the computer. Try again.', 'close', {
          panelClass: 'snackbar-error',
          duration: 2500});
      } );
  }

}
