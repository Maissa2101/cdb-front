import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatButtonModule, MatCardModule, MatListModule, MatToolbarModule, MatFormFieldModule, MatInputModule, MatPaginatorModule, MatSortModule, MatProgressSpinnerModule, MatTableModule, MatCheckboxModule, MatSnackBarModule, MAT_SNACK_BAR_DEFAULT_OPTIONS, MatOptionModule, MatSelectModule, MatDatepickerModule, MatNativeDateModule} from '@angular/material';



@NgModule({
    imports: [
        CommonModule,
        MatToolbarModule,
        MatCardModule,
        MatListModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        MatProgressSpinnerModule,
        MatCheckboxModule,
        MatSnackBarModule,
        MatOptionModule,
        MatSelectModule,
        MatDatepickerModule,
        MatNativeDateModule
    ],
    exports: [
        MatToolbarModule,
        MatCardModule,
        MatListModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        MatProgressSpinnerModule,
        MatCheckboxModule,
        MatSnackBarModule,
        MatOptionModule,
        MatSelectModule,
        MatDatepickerModule,
        MatNativeDateModule
    ],
    declarations: []
})
export class CustomMaterialModule {
}
