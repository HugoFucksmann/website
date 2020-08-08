import { NgModule } from '@angular/core'

import {MatButtonModule} from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav'
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatMenuModule} from '@angular/material/menu';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';

@NgModule({
    imports: [

    ],
    exports: [
        MatButtonModule,
        MatSidenavModule,
        MatProgressSpinnerModule,
        MatIconModule,
        MatToolbarModule,
        MatCardModule,
        MatTabsModule,
        MatButtonToggleModule,
        MatFormFieldModule,
        MatExpansionModule,
        MatMenuModule,
        MatBottomSheetModule
    ]
})
export class MaterialModule{}