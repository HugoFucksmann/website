import { Component, OnInit } from '@angular/core';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material/bottom-sheet';
import { BodyComponent } from '../body/body.component';
import { FormularioContactoComponent } from '../formulario-contacto/formulario-contacto.component';
@Component({
  selector: 'app-header-dos',
  templateUrl: './header-dos.component.html',
  styleUrls: ['./header-dos.component.css']
})
export class HeaderDosComponent implements OnInit {

  constructor(private _bottomSheet: MatBottomSheet) { }

  ngOnInit(): void {
  }

  openBottomSheet(): void {
    this._bottomSheet.open(FormularioContactoComponent);
  }




  showFiller:boolean;
}
