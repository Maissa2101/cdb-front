import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComputersComponent } from './computers/computers.component';
import { ComputerDetailsComponent } from './computer-details/computer-details.component';
import { CreateComputerComponent } from './create-computer/create-computer.component';
import { UpdateComputerComponent } from './update-computer/update-computer.component';
import { ComputerComponent } from './computer.component';
import { CompanyService } from '../company/company.service';
import { ComputerService } from './computer.service';
import { CustomMaterialModule } from '../custom-material/custom-material.module';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        CustomMaterialModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    exports: [
        ComputerComponent,
        ComputerDetailsComponent,
        ComputersComponent,
    ],
    declarations: [
        ComputerComponent,
        CreateComputerComponent,
        UpdateComputerComponent,
        ComputersComponent,
        ComputerDetailsComponent,
    ],
    providers: [
        ComputerService,
        CompanyService,
    ]
})
export class ComputerModule { }
