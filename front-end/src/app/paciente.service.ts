import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Paciente } from './paciente';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {

  //URL all pacientes
  private pacienteURL = "http://localhost:8080/api/v1/personas";

  constructor(private httpCliente : HttpClient) { }

  //get pacientes
  getListPacientes():Observable<Paciente[]>{
    return this.httpCliente.get<Paciente[]>(`${this.pacienteURL}`);
  }

  //create paciente
  registerPaciente(paciente:Paciente):Observable<Object>{
    return this.httpCliente.post(`${this.pacienteURL}`,paciente);
  }

  //get paciente by id
  getPacienteById(id:number):Observable<Paciente>{
    return this.httpCliente.get<Paciente>(`${this.pacienteURL}/${id}`);
  }

  //update paciente by id
  updatePaciente(id:number,paciente:Paciente):Observable<Object>{
    return this.httpCliente.put(`${this.pacienteURL}/${id}`, paciente);
  }

  //delete paciente
  deletePaciente(id:number):Observable<Object>{
    return this.httpCliente.delete(`${this.pacienteURL}/${id}`);
  }
}
