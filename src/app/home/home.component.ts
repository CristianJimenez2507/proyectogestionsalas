import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  loginForm: FormGroup;
  private auth = getAuth(initializeApp(environment.firebaseConfig));

constructor(private fb: FormBuilder, private router: Router) {

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
loginWithGoogle(): void {
  const provider = new GoogleAuthProvider();
  signInWithPopup(this.auth, provider)
    .then((result) => {
      console.log('Inicio de sesión con Google exitoso:', result);
      alert('Inicio de sesión con Google exitoso');
      this.router.navigate(['/login']);
    })
    .catch((error) => {
      console.error('Error al iniciar sesión con Google:', error);
      alert('Error al iniciar sesión con Google.');
    });
}
}
