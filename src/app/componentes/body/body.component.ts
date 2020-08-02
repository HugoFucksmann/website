import { Component, OnInit } from '@angular/core';
import { MaquinaEscribirService } from 'src/app/servicios/maquina-escribir.service';


@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
  
})
export class BodyComponent implements OnInit {

  constructor(
    private maquinaEscribir: MaquinaEscribirService
    ) {}

  ngOnInit(): void {
    
   this.maquinaEscribir.maquinaDeEscribir("maquinas","Programador Full-Stack",150);
  }

}



