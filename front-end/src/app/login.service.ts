import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Paciente } from './paciente';
import { Persona } from './persona';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private personaURL = "http://localhost:8080/api/v1";

  constructor(private  httpCliente: HttpClient) { }

  //get paciente by id
  getPersonaById(id:number):Observable<Persona>{
    return this.httpCliente.get<Paciente>(`${this.personaURL}/personas/${id}`);
  }

  loginPersona(persona:Persona):Observable<object>{
    console.log(persona);
    return this.httpCliente.post(`${this.personaURL}/login`,persona);
  }
}
