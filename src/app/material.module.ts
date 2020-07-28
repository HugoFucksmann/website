import { NgModule } from '@angular/core'

import {MatButtonModule} from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav'
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
@NgModule({
    imports: [

    ],
    exports: [
        MatButtonModule,
        MatSidenavModule,
        MatProgressSpinnerModule
    ]
})
export class MaterialModule{}