import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActualizarPacienteComponent } from './actualizar-paciente/actualizar-paciente.component';
import { DetalleMedicoComponent } from './detalle-medico/detalle-medico.component';
import { DetallePacienteComponent } from './detalle-paciente/detalle-paciente.component';
import { ListaMedicosComponent } from './lista-medicos/lista-medicos.component';
import { ListaPacientesComponent } from './lista-pacientes/lista-pacientes.component';
import { LoginComponent } from './login/login.component';
import { RegistarPacienteComponent } from './registar-paciente/registar-paciente.component';
import { RegistrarMedicoComponent } from './registrar-medico/registrar-medico.component';

const routes: Routes = [
  {path:'', redirectTo:'login',pathMatch:'full'},

  {path:'login',component:LoginComponent},

  {path:'pacientes',component:ListaPacientesComponent},
  {path:'registrar-paciente',component:RegistarPacienteComponent},
  {path:'actualizar-paciente/:id',component:ActualizarPacienteComponent},
  {path:'detalle-paciente/:id',component:DetallePacienteComponent},

  {path:'medicos',component:ListaMedicosComponent},
  {path:'registrar-medico',component:RegistrarMedicoComponent},
  {path:'detalle-medico/:id',component:DetalleMedicoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
