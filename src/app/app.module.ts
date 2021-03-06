import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { AppRoutingModule } from ".//app-routing.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CustomMaterialModule } from "./custom-material/custom-material.module";
import { FooterComponent } from "./footer/footer.component";
import { CompanyComponent } from "./company/company.component";
import { CreateCompanyComponent } from "./company/create-company/create-company.component";
import { CompaniesComponent } from "./company/companies/companies.component";
import { CompanyDetailsComponent } from "./company/company-details/company-details.component";
import { UpdateCompanyComponent } from "./company/update-company/update-company.component";
import {
  MatFormFieldModule, MatIcon, MatIconModule,
  MatInputModule,
  MatPaginatorIntl,
  MatTableModule, MatTooltipModule
} from "@angular/material";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { LoginComponent } from "./login/login-page/login.component";
import { CompanyService } from "./company/company.service";
import { LoginAddComponent } from "./login/login-add/login-add.component";
import { UserService } from "./login/user.service";
import { AlertComponent } from "./login/alert/alert.component";
import { AlertService } from "./login/alert.service";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { AuthenticationService } from "./login/authentificationService.service";
import { AuthGuard } from "./login/auth.guard";
import { JwtInterceptor } from "./login/jwt.interceptor";
import { RoleGuard } from "./login/role.guard";
import { ComputerService } from "./computer/computer.service";
import { ComputerComponent } from "./computer/computer.component";
import { ComputerDetailsComponent } from "./computer/computer-details/computer-details.component";
import { ComputersComponent } from "./computer/computers/computers.component";
import { CreateComputerComponent } from "./computer/create-computer/create-computer.component";
import { UpdateComputerComponent } from "./computer/update-computer/update-computer.component";
import { HomepageComponent } from './homepage/homepage.component';

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
    ComputerComponent,
    ComputerDetailsComponent,
    ComputersComponent,
    CreateComputerComponent,
    UpdateComputerComponent,
    LoginComponent,
    LoginAddComponent,
    AlertComponent,
    HomepageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    MatInputModule,
    MatTooltipModule,
    MatIconModule
  ],

  providers: [
    CompanyService,
    ComputerService,
    UserService,
    AlertService,
    AuthenticationService,
    AuthGuard,
    RoleGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
