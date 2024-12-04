import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  
loginForm: FormGroup;

constructor(private fb: FormBuilder) {

this.loginForm = this.fb.group({
  email: ['',[Validators.required, Validators.email]],
  password: ['', [Validators.required, Validators.minLength(8)]]
});

}

onSubmit(): void {

  if (this.loginForm.valid){
    console.log('Formulario Enviado:', this.loginForm.value);
    alert('Inicio Exitoso')
  }else{
    console.log('Formulario Inválido');
    alert('Ingrese la información correcta');
  }

}
}
