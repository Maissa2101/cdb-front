import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {CompanyComponent} from './company/company.component';
import {AppRoutingModule} from './/app-routing.module';
import {CompaniesComponent} from './company/companies/companies.component';
import {CompanyDetailsComponent} from './company/company-details/company-details.component';
import {CreateCompanyComponent} from './company/create-company/create-company.component';
import {UpdateCompanyComponent} from './company/update-company/update-company.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CustomMaterialModule} from './custom-material/custom-material.module';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule ,FormsModule} from '@angular/forms';
import { LoginComponent } from './login/login-page/login.component';
import {CompanyService} from "./company/company.service";
import { LoginAddComponent } from './login/login-add/login-add.component';
import {UserService} from "./login/user.service";

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        CompanyComponent,
        CompaniesComponent,
        CompanyDetailsComponent,
        CreateCompanyComponent,
        UpdateCompanyComponent,
        LoginComponent,
        LoginAddComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        CustomMaterialModule,
        AppRoutingModule,
        HttpClientModule,
        ReactiveFormsModule,

    ],


    providers: [CompanyService,UserService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
