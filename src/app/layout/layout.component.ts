import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  nivelActual = 2;

  constructor() { }

  ngOnInit(): void {
  }

  cambiarNivelActual(n: number): void {
    this.nivelActual = n;
  }

  obtenerNivelActual(): string {
    return `nivel-${this.nivelActual}`;
  }

  resetearNivel(): void {
    this.nivelActual = 2;
  }

}
