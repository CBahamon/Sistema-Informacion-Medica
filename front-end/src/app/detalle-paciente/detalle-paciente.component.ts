import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Paciente } from '../paciente';
import { PacienteService } from '../paciente.service';

@Component({
  selector: 'app-detalle-paciente',
  templateUrl: './detalle-paciente.component.html',
  styleUrls: ['./detalle-paciente.component.css']
})
export class DetallePacienteComponent implements OnInit {

  id:number;
  paciente:Paciente;

  constructor(private pacienteService:PacienteService, private router:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.pacienteService.getPacienteById(this.id).subscribe(dato =>{
      this.paciente = dato;
    },err => console.log(err))
  }

}
