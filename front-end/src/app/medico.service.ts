import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Medico } from './medico';

@Injectable({
  providedIn: 'root'
})
export class MedicoService {

  //URL all medicos
  private medicoURL = "http://localhost:8080/api/v1/personas";

  constructor(private httpCliente : HttpClient) { }

  //get all medicos
  getListMedicos():Observable<Medico[]>{
    return this.httpCliente.get<Medico[]>(`${this.medicoURL}`)
  }
}
