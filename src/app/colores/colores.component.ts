import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: "app-colores",
  templateUrl: "./colores.component.html",
  styleUrls: ["./colores.component.css"],
  encapsulation: ViewEncapsulation.None
})
export class ColoresComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  color: String = "blue";

  generarRandom(): String {
    return Math.floor(Math.random() * 255).toString(16);
  }

  colorHex(): String {
    return "#" + this.generarRandom() + this.generarRandom() + this.generarRandom();
  }
}

