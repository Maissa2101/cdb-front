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
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {MatFormFieldModule, MatInputModule} from '@angular/material';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        CompanyComponent,
        CompaniesComponent,
        CompanyDetailsComponent,
        CreateCompanyComponent,
        UpdateCompanyComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        CustomMaterialModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
