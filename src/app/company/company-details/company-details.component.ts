import {Component, OnInit} from '@angular/core';
import {Company} from '../company.model';
import {CompanyService} from '../company.service';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-company-details',
    templateUrl: './company-details.component.html',
    styleUrls: ['./company-details.component.css']
})
export class CompanyDetailsComponent implements OnInit {

    id: number;
    company: Company;

    constructor(private companyService: CompanyService, private route: ActivatedRoute) {
        this.id = +this.route.snapshot.paramMap.get('id');
    }

    ngOnInit() {
        this.companyService.getById(this.id)
            .subscribe(company => this.company = company,
                error => console.error('Problem in getting the company', error)
            );
    }

}
