import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Output() abriendo=new EventEmitter();

   abrir:boolean = false;

   onAbrir(){
     this.abriendo.emit(this.abrir);
   }
}

