import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    maquina(div,texto,150);
    
  }

  

}

function maquina(contenedor,texto,intervalo){
  // Calculamos la longitud del texto
  
  longitud = texto.length;
  // Obtenemos referencia del div donde se va a alojar el texto.
  cnt = document.getElementById(contenedor);
  var i=0;
  // Creamos el timer
  timer = setInterval(function(){
     // Vamos añadiendo letra por letra y la _ al final.
     cnt.innerHTML = cnt.innerHTML.substr(0,cnt.innerHTML.length-1) + texto.charAt(i) + "|";
     // Si hemos llegado al final del texto..
     if(i >= longitud){
        // Salimos del Timer y quitamos la barra baja (_)
        clearInterval(timer);
        cnt.innerHTML = cnt.innerHTML.substr(0,longitud);
        cnt.innerHTM("<br>")
        return true;
     } else {
        // En caso contrario.. seguimos
        i++;
     }},intervalo);
};
var div="maquinas"
var texto = "Programador Full-Stack";
// 100 es el intervalo de minisegundos en el que se escribirá cada letra.


var longitud, cnt, timer;
