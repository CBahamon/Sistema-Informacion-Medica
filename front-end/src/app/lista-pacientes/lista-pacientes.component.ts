import { Component, OnInit } from '@angular/core';
import { Paciente } from '../paciente';
import { PacienteService } from '../paciente.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-pacientes',
  templateUrl: './lista-pacientes.component.html',
  styleUrls: ['./lista-pacientes.component.css']
})
export class ListaPacientesComponent implements OnInit {

  pacientes:Paciente[];

  constructor(private pacienteServicio:PacienteService, private router:Router) { }

  ngOnInit(): void {
    this.getPacientes();
  }

  private getPacientes(){
    this.pacienteServicio.getListPacientes().subscribe(dato => {
      this.pacientes = dato;
    })
  }

  crearPaciente(){
    this.router.navigate(['registrar-paciente'])
  }

  updatePaciente(id:number){
    this.router.navigate(['actualizar-paciente',id])
  }

  deletePaciente(id:number){
    this.pacienteServicio.deletePaciente(id).subscribe(dato =>{
      console.log(dato);
      this.getPacientes();
    })
  }

  detailPaciente(id:number){
    this.router.navigate(['detalle-paciente',id])
  }

}
