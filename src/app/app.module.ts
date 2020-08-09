import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CuerpoDosComponent } from './componentes/cuerpo-dos/cuerpo-dos.component';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { HeaderDosComponent } from './componentes/header-dos/header-dos.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { BodyComponent } from './componentes/body/body.component';
import { FormularioContactoComponent } from './componentes/formulario-contacto/formulario-contacto.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//ui
import { MaterialModule } from './material.module'

//servicios



//rutas
import { RoutingModule } from './routing.module';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    BodyComponent,
    HeaderDosComponent,
    CuerpoDosComponent,
    FormularioContactoComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [
    
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
