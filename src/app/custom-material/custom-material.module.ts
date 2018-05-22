import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule, MatCardModule, MatListModule, MatToolbarModule,MatFormFieldModule,MatInputModule} from '@angular/material';


@NgModule({
    imports: [
        CommonModule,
        MatToolbarModule,
        MatCardModule,
        MatListModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule
    ],
    exports: [
        MatToolbarModule,
        MatCardModule,
        MatListModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule
    ],
    declarations: []
})
export class CustomMaterialModule {
}
