import { NgModule } from '@angular/core'

import {MatButtonModule} from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav'
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatIconModule} from '@angular/material/icon';
@NgModule({
    imports: [

    ],
    exports: [
        MatButtonModule,
        MatSidenavModule,
        MatProgressSpinnerModule,
        MatIconModule
    ]
})
export class MaterialModule{}