import {Component, Input, OnInit} from '@angular/core';
import {CompanyService} from '../company.service';
import {Company} from '../company.model';
import {InputMetadataWalker} from 'codelyzer/noInputRenameRule';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent implements OnInit {

  companies: Company[];

  @Input()
  wordToSearch: string;

  constructor(private companyService: CompanyService) {
  }

  ngOnInit() {
    this.companyService.getCompanies()
      .subscribe(
        companies => this.companies = companies,
        error => console.error('Error in get list companies', error)
      );
  }

  delete(company: Company) {
    const i = this.companies.indexOf(company);
    this.companies.splice(i, 1);
  }

  deleteMultiple(companies: Company[]) {
    companies.forEach(company =>
      this.delete(company));
  }

  search(search: string) {
    this.wordToSearch = search;
    this.companyService.search(this.wordToSearch).subscribe(
      companies => this.companies.filter(company => company.name.search(this.wordToSearch) !== -1),
      error => console.error('Error in get list companies after search', error)
    );
  }

}
