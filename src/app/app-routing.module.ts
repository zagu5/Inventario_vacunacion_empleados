import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AdministradorComponent } from './views/administrador/administrador.component';
import { EmpleadoComponent } from './views/empleado/empleado.component';
import { HomeComponent } from './views/home/home.component';

const routes: Routes = [
  {path: '**', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'administrador', component: AdministradorComponent},
  {path: 'empleado', component: EmpleadoComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
