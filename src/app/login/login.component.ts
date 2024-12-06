import { Component } from '@angular/core';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  salas = [
    { numero: 'Sala 101', equipos: 9, estado: 'Disponible' },
    { numero: 'Sala 102', equipos: 9, estado: 'Disponible' },
    { numero: 'Sala 103', equipos: 9, estado: 'Disponible' }
  ];
}

