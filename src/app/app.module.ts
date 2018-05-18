import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {AppRoutingModule} from './/app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CustomMaterialModule} from './custom-material/custom-material.module';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import {FooterComponent} from './footer/footer.component';
import {CompanyComponent} from './company/company.component';
import {CreateCompanyComponent} from './company/create-company/create-company.component';
import {CompaniesComponent} from './company/companies/companies.component';
import {CompanyDetailsComponent} from './company/company-details/company-details.component';
import {UpdateCompanyComponent} from './company/update-company/update-company.component';
import {CompanyService} from './company/company.service';


@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        CompanyComponent,
        CompanyDetailsComponent,
        CompaniesComponent,
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
        ReactiveFormsModule,
    ],
    providers: [ CompanyService ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
