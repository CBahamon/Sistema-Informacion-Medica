import { Component, OnInit } from '@angular/core';
import { Medico } from '../medico';
import { MedicoService } from '../medico.service';

@Component({
  selector: 'app-lista-medicos',
  templateUrl: './lista-medicos.component.html',
  styleUrls: ['./lista-medicos.component.css']
})
export class ListaMedicosComponent implements OnInit {

  medicos:Medico[];

  constructor(private medicoServio:MedicoService) { }

  ngOnInit(): void {
    this.getMedicos();
  } 

  private getMedicos(){
    this.medicoServio.getListMedicos().subscribe(dato =>{
      this.medicos = dato;
    })
  }

}
