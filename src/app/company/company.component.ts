import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Company} from './company.model';
import {CompanyService} from './company.service';

@Component({
    selector: 'app-company',
    templateUrl: './company.component.html',
    styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

    @Input()
    company: Company;

    @Output() deleteR = new EventEmitter<Company>();

    constructor(private companyService: CompanyService) {
    }

    ngOnInit() {
    }

  delete() {
    this.companyService.deleteCompany(this.company.id).subscribe(() => this.deleteR.emit(this.company),
      error => console.error('Problem in delete company', error));
  }
}
