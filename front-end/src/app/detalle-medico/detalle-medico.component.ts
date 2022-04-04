import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Medico } from '../medico';
import { MedicoService } from '../medico.service';


@Component({
  selector: 'app-detalle-medico',
  templateUrl: './detalle-medico.component.html',
  styleUrls: ['./detalle-medico.component.css']
})
export class DetalleMedicoComponent implements OnInit {

  id:number;
  medico:Medico;
  constructor(private medicoServicio:MedicoService, private router:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.medicoServicio.getMedicoById(this.id).subscribe(dato =>{
      this.medico = dato;
    },err => console.log(err))
  }

}
