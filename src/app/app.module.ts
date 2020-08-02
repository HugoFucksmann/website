import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { BodyComponent } from './componentes/body/body.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './material.module'

//servicios
import { MaquinaEscribirService } from './servicios/maquina-escribir.service';
import { HeaderDosComponent } from './componentes/header-dos/header-dos.component'

//rutas
import { RoutingModule } from './routing/routing.module';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    BodyComponent,
    HeaderDosComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [
    MaquinaEscribirService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
