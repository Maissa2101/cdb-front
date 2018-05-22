import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {CompaniesComponent} from './company/companies/companies.component';
import {CompanyDetailsComponent} from './company/company-details/company-details.component';
import {CreateCompanyComponent} from './company/create-company/create-company.component';
import {UpdateCompanyComponent} from './company/update-company/update-company.component';
import {LoginComponent} from "./login/login-page/login.component";
import {LoginAddComponent} from "./login/login-add/login-add.component";

const routes: Routes = [

    {
        path: 'loginAdd',
        component: LoginAddComponent,
        pathMatch: 'full'
    },

    {
        path: 'login',
        component: LoginComponent,
        pathMatch: 'full'
    },

    {
        path: 'companies',
        component: CompaniesComponent,
        pathMatch: 'full'
    },
    {
        path: 'companies/:id',
        component: CompanyDetailsComponent,
    },
    {
        path: 'companies',
        component: CreateCompanyComponent,
    },
    {
        path: 'companies',
        component: UpdateCompanyComponent,
    },

    {
        path: '**',
        redirectTo: 'companies',
        pathMatch: 'full'
    }
];

@NgModule({
    exports: [
        RouterModule
    ],
    imports: [
        CommonModule,
        RouterModule.forRoot(routes)
    ],
    declarations: []
})
export class AppRoutingModule { }