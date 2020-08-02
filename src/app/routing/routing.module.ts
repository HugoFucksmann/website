import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { BodyComponent } from '../componentes/body/body.component'
import { CuerpoDosComponent } from '../componentes/cuerpo-dos/cuerpo-dos.component'

const rutas: Routes = [
  {path: '', component: BodyComponent},
  {path: 'website/home', component: CuerpoDosComponent}
  
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(rutas)
  ],
  exports: [RouterModule]
})
export class RoutingModule { }

export const routingComponents = [BodyComponent, CuerpoDosComponent]


