import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Sistema Informacion Medica';
  logged = localStorage.getItem("login");


  login: string;
  log: boolean;

  rol:String

  ngOnInit(): void {
    this.load();

  }


  constructor(private router: Router) { }

  load() {

    this.login = JSON.stringify(localStorage.getItem("login"));

    if (JSON.parse(this.login)) {
      this.log = true
    } else {
      this.log = false
    }

    this.rol =JSON.parse(JSON.stringify(localStorage.getItem("rol")));
 
    console.log(this.rol);
    


  }

  loggout() {
    localStorage.removeItem("login");
    localStorage.removeItem("rol");
    this.router.navigate(['login'])
  }

}
