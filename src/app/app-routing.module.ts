import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {CompaniesComponent} from './company/companies/companies.component';
import {CompanyDetailsComponent} from './company/company-details/company-details.component';
import {CreateCompanyComponent} from './company/create-company/create-company.component';
import {UpdateCompanyComponent} from './company/update-company/update-company.component';
import {LoginComponent} from "./login/login-page/login.component";
import {LoginAddComponent} from "./login/login-add/login-add.component";
import {AuthGuard} from "./login/auth.guard";
import { RoleGuard } from './login/role.guard';
import { ComputersComponent } from './computer/computers/computers.component';
import { CreateComputerComponent } from './computer/create-computer/create-computer.component';
import { UpdateComputerComponent } from './computer/update-computer/update-computer.component';
import { ComputerDetailsComponent } from './computer/computer-details/computer-details.component';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [
    {
        path: 'computers',
        component: ComputersComponent,
        pathMatch: 'full',
    },
    {
        path: 'computers/add',
        component: CreateComputerComponent,
        canActivate: [AuthGuard],
        pathMatch: 'full'
    },
    {
        path: 'computers/:id/update',
        component: UpdateComputerComponent,
        canActivate: [AuthGuard, RoleGuard],
        pathMatch: 'full'
    },
    {
        path: 'computers/:id',
        component: ComputerDetailsComponent,
        pathMatch: 'full'
    },
    {
        path: 'companies',
        component: CompaniesComponent,
        pathMatch: 'full',
    },
    {
        path: 'companies/add',
        component: CreateCompanyComponent,
        canActivate: [AuthGuard],
        pathMatch: 'full'
    },
    {
        path: 'companies/:id/update',
        component: UpdateCompanyComponent,
        canActivate: [AuthGuard, RoleGuard],
        pathMatch: 'full'
    },
    {
        path: 'companies/:id',
        component: CompanyDetailsComponent,
        pathMatch: 'full'
    },
    {
        path: 'loginAdd',
        component: LoginAddComponent,
        pathMatch: 'full',
    },
    {
        path: 'login',
        component: LoginComponent,
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomepageComponent,
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: 'home',
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
