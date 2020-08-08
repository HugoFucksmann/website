import { Component, OnInit } from '@angular/core';
import AOS from 'aos';

//animaciones al cargar


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent {
  title = 'AngularWeb';


  prosesaAbriendo(msj){

    this.respuesta=msj;
  }

  respuesta:boolean;

  ngOnInit(): void {
    AOS.init();
  }
}
