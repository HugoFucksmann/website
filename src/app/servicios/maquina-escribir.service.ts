import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MaquinaEscribirService {

  maquinaDeEscribir(contenedor,texto,intervalo){
    // Calculamos la longitud del texto
    
    longitud = texto.length;
    // Obtenemos referencia del div donde se va a alojar el texto.
    cnt = document.getElementById(contenedor);
    console.log(cnt);
    
    var i=0;
    // Creamos el timer
    timer = setInterval(function(){
       // Vamos añadiendo letra por letra y la _ al final.
       cnt.innerHTML = cnt.innerHTML.substr(0,cnt.innerHTML.length-1) + texto.charAt(i) + "|";
       // Si hemos llegado al final del texto..
       if(i >= longitud){
          // Salimos del Timer y quitamos la barra
          clearInterval(timer);
          cnt.innerHTML = cnt.innerHTML.substr(0,longitud);
          
          return true;
       } else {
          // En caso contrario.. seguimos
          i++;
       }},intervalo);
  };

  constructor() { }

  
}

var div="maquinas"
var texto = "Programador Full-Stack";
var longitud, cnt, timer;