import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaPacientesComponent } from './lista-pacientes/lista-pacientes.component';
import { HttpClientModule } from '@angular/common/http';
import { ListaMedicosComponent } from './lista-medicos/lista-medicos.component';
import { RegistarPacienteComponent } from './registar-paciente/registar-paciente.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ListaPacientesComponent,
    ListaMedicosComponent,
    RegistarPacienteComponent,
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
