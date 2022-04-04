import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Medico } from '../medico';
import { MedicoService } from '../medico.service';

@Component({
  selector: 'app-lista-medicos',
  templateUrl: './lista-medicos.component.html',
  styleUrls: ['./lista-medicos.component.css']
})
export class ListaMedicosComponent implements OnInit {

  medicos:Medico[];

  constructor(private medicoServio:MedicoService, private router:Router) { }

  ngOnInit(): void {
    this.getMedicos();
  } 

  private getMedicos(){
    this.medicoServio.getListMedicos().subscribe(dato =>{
      this.medicos = dato;
    })
  }

  createMedico(){
    this.router.navigate(['registrar-medico'])
  }

  updateMedico(id:number){
    this.router.navigate(['actualizar-medico'])
  }

  deleteMedico(id:number){
    this.medicoServio.deleteMedico(id).subscribe(dato =>{
      console.log(dato);
      this.getMedicos();
    })
  }

  detailMedico(id:number){
    this.router.navigate(['detalle-medico',id]);
  }

}
