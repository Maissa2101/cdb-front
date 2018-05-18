import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CustomMaterialModule} from '../custom-material/custom-material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CompanyService} from './company.service';
import {RouterModule} from '@angular/router';
import {CompanyComponent} from './company.component';
import {CompanyDetailsComponent} from './company-details/company-details.component';
import {UpdateCompanyComponent} from './update-company/update-company.component';
import {CreateCompanyComponent} from './create-company/create-company.component';
import {CompaniesComponent} from './companies/companies.component';


@NgModule({
    imports: [
        CommonModule,
        CustomMaterialModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    exports: [
        CompanyComponent,
        CompanyDetailsComponent,
        CompaniesComponent,
    ],
    declarations: [
        CompanyComponent,
        CreateCompanyComponent,
        UpdateCompanyComponent,
        CompaniesComponent,
        CompanyDetailsComponent,
    ],
    providers: [
        CompanyService,
    ]
})
export class RecipeModule { }
