import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Paciente } from './paciente';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {
  
  //URL all pacientes
  private baseURL = "http://localhost:8080/api/v1/pacientes";
  
  constructor(private httpCliente : HttpClient) { }

  //get pacientes
  getListPacientes():Observable<Paciente[]>{
    return this.httpCliente.get<Paciente[]>(`${this.baseURL}`);
  }

}
