import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule, MatCardModule, MatListModule, MatToolbarModule} from '@angular/material';


@NgModule({
    imports: [
        CommonModule,
        MatToolbarModule,
        MatCardModule,
        MatListModule,
        MatButtonModule
    ],
    exports: [
        MatToolbarModule,
        MatCardModule,
        MatListModule,
        MatButtonModule,
    ],
    declarations: []
})
export class CustomMaterialModule {
}
