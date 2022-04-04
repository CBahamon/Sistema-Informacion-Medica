import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import { Persona } from '../persona';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  id: number;
  persona: Persona = new Persona();
  personaData:Persona;
  // credentials={
  //   correo_persona:'',
  //   password_persona:''
  // }

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {

  }

  onSubmit() {
    console.log(this.persona);

    this.loginService.loginPersona(this.persona).subscribe(dato=>{
      // alert("Login Ok")
      this.loginService.getPersonaById(this.persona.id_persona).subscribe(dato => {
        this.personaData = dato;
        console.log(this.personaData);
        localStorage.setItem("rol", JSON.stringify(this.personaData.rol_persona));
        localStorage.setItem("login", "true");

        if (this.personaData.rol_persona == 1) {
          this.router.navigate(['pacientes'])
        }else if(this.personaData.rol_persona == 2){
          this.router.navigate(['detalle-medico',this.personaData.id_persona])
        }else{
          this.router.navigate(['detalle-paciente',this.personaData.id_persona])
        }

      }, err => console.log(err))
      
    },err =>alert("Login false"))


  }

}
