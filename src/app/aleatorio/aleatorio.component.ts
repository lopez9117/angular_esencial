import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-aleatorio',
  templateUrl: './aleatorio.component.html',
  styleUrls: ['./aleatorio.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AleatorioComponent implements OnInit {


  aleatorio:Number= Math.floor(Math.random() * 100);
  constructor() {}  

  ngOnInit() {
  }

}
