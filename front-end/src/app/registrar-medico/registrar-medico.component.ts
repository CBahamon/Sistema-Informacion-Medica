import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Medico } from '../medico';
import { MedicoService } from '../medico.service';

@Component({
  selector: 'app-registrar-medico',
  templateUrl: './registrar-medico.component.html',
  styleUrls: ['./registrar-medico.component.css']
})
export class RegistrarMedicoComponent implements OnInit {

  medico: Medico = new Medico();
  constructor(private medicoServicio:MedicoService, private router:Router) { }

  ngOnInit(): void {
  }

  saveMedico(){
    this.medicoServicio.registerMedico(this.medico).subscribe(dato =>{
      this.goToMedicos();
    },err => console.log(err))
  }

  goToMedicos(){
    this.router.navigate(['/medicos']);
  }

  onSubmit(){
    this.saveMedico();
  }

}
