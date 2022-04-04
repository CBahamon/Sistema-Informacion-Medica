import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaPacientesComponent } from './lista-pacientes/lista-pacientes.component';
import { HttpClientModule } from '@angular/common/http';
import { ListaMedicosComponent } from './lista-medicos/lista-medicos.component';
import { RegistarPacienteComponent } from './registar-paciente/registar-paciente.component';
import { FormsModule } from '@angular/forms';
import { ActualizarPacienteComponent } from './actualizar-paciente/actualizar-paciente.component';
import { RegistrarMedicoComponent } from './registrar-medico/registrar-medico.component';
import { DetallePacienteComponent } from './detalle-paciente/detalle-paciente.component';
import { DetalleMedicoComponent } from './detalle-medico/detalle-medico.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    ListaPacientesComponent,
    ListaMedicosComponent,
    RegistarPacienteComponent,
    ActualizarPacienteComponent,
    RegistrarMedicoComponent,
    DetallePacienteComponent,
    DetalleMedicoComponent,
    LoginComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
