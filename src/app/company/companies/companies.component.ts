import {Component, OnInit} from '@angular/core';
import {CompanyService} from '../company.service';
import {Company} from '../company.model';

@Component({
    selector: 'app-companies',
    templateUrl: './companies.component.html',
    styleUrls: ['./companies.component.css']
})
export class CompaniesComponent implements OnInit {

    companies: Company[];

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

}
