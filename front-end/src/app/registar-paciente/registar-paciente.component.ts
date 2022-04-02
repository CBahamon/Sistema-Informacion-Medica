import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Paciente } from '../paciente';
import { PacienteService } from '../paciente.service';

@Component({
  selector: 'app-registar-paciente',
  templateUrl: './registar-paciente.component.html',
  styleUrls: ['./registar-paciente.component.css']
})
export class RegistarPacienteComponent implements OnInit {

  
  paciente: Paciente = new Paciente();
  constructor(private pacienteServicio:PacienteService,private router:Router) { }

  ngOnInit(): void {
  }
  //save paciente
  savePaciente(){
    this.pacienteServicio.registerPaciente(this.paciente).subscribe(dato =>{
      console.log(dato);
      this.goToPacientes();
    },err => console.log(err));
  }

  goToPacientes(){
    this.router.navigate(['/pacientes']);
  }

  onSubmit(){
    this.savePaciente();
  }

}
