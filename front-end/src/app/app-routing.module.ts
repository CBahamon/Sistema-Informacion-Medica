import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaMedicosComponent } from './lista-medicos/lista-medicos.component';
import { ListaPacientesComponent } from './lista-pacientes/lista-pacientes.component';
import { RegistarPacienteComponent } from './registar-paciente/registar-paciente.component';

const routes: Routes = [
  {path:'', redirectTo:'pacientes',pathMatch:'full'},
  {path:'pacientes',component:ListaPacientesComponent},
  {path:'medicos',component:ListaMedicosComponent},
  {path:'registrar-paciente',component:RegistarPacienteComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
