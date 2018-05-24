import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule, MatCardModule, MatListModule, MatToolbarModule, MatFormFieldModule, MatInputModule, MatPaginatorModule, MatSortModule, MatProgressSpinnerModule, MatTableModule, MatCheckboxModule} from '@angular/material';


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
        MatCheckboxModule
    ],
    declarations: []
})
export class CustomMaterialModule {
}
