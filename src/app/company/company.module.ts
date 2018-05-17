import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CustomMaterialModule} from '../custom-material/custom-material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CompanyService} from './company.service';
import {RouterModule} from '@angular/router';
import {CompanyComponent} from './company.component';
import {CompanyDetailsComponent} from './company-details/company-details.component';


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
    ],
    declarations: [
    ],
    providers: [
        CompanyService,
    ]
})
export class RecipeModule { }