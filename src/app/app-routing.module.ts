import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { DetallesComponent } from './detalles/detalles.component';

const routes: Routes = [ 

  {path:'', component: HomeComponent},
  {path: 'login', component: LoginComponent },
  {path: 'detalles', component: DetallesComponent}
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
