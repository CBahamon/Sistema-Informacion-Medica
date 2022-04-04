import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Paciente } from '../paciente';
import { PacienteService } from '../paciente.service';

@Component({
  selector: 'app-actualizar-paciente',
  templateUrl: './actualizar-paciente.component.html',
  styleUrls: ['./actualizar-paciente.component.css']
})
export class ActualizarPacienteComponent implements OnInit {

  id:number;
  paciente:Paciente = new Paciente();

  constructor(private pacienteService:PacienteService, private router:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.pacienteService.getPacienteById(this.id).subscribe(dato =>{
      this.paciente = dato;
    },error => console.log(error));
  }

  goToPacientes(){
    this.router.navigate(['/pacientes']);
    // Swal('Paciente actualizado',`El paciente ${this.paciente.nombre_persona} ha sido actualizado`,`success`);
    // swal('Empleado actualizado',`El empleado ${this.empleado.nombre} ha sido actualizado con exito`,`success`);
  }

  onSubmit(){
    this.pacienteService.updatePaciente(this.id,this.paciente).subscribe(dato =>{
      this.goToPacientes();
    },err =>console.log(err));
  }

}
