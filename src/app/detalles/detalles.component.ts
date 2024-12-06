import { Component } from '@angular/core';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css'],
})
export class DetallesComponent {
  computadores = [
    { id: 1, nombre: 'Computador 1', tieneProblema: false, problema: '' },
    { id: 2, nombre: 'Computador 2', tieneProblema: false, problema: '' },
    { id: 3, nombre: 'Computador 3', tieneProblema: false, problema: '' },
    { id: 4, nombre: 'Computador 4', tieneProblema: false, problema: '' },
    { id: 5, nombre: 'Computador 5', tieneProblema: false, problema: '' },
    { id: 6, nombre: 'Computador 6', tieneProblema: false, problema: '' },
    { id: 7, nombre: 'Computador 7', tieneProblema: false, problema: '' },
    { id: 8, nombre: 'Computador 8', tieneProblema: false, problema: '' },
    { id: 9, nombre: 'Computador 9', tieneProblema: false, problema: '' },
  ];

  mostrarPopupNotificar = false;
  mostrarPopupSolucion = false;
  computadorSeleccionado: any = null;
  problemaInput: string = '';

  abrirPopup(computador: any) {
    this.computadorSeleccionado = computador;
    this.problemaInput = computador.problema || '';
    this.mostrarPopupNotificar = true;
  }

  abrirPopupSolucion(computador: any) {
    this.computadorSeleccionado = computador;
    this.mostrarPopupSolucion = true;
  }

  cerrarPopup() {
    this.mostrarPopupNotificar = false;
    this.mostrarPopupSolucion = false;
    this.computadorSeleccionado = null;
    this.problemaInput = '';
  }

  guardarProblema() {
    if (this.problemaInput.trim()) {
      this.computadorSeleccionado.tieneProblema = true;
      this.computadorSeleccionado.problema = this.problemaInput;
      this.cerrarPopup();
    } 
  }

  confirmarSolucion() {
    this.computadorSeleccionado.tieneProblema = false;
    this.computadorSeleccionado.problema = '';
    this.cerrarPopup();
  }
}


