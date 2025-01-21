import { Component } from '@angular/core';
import { ServiciopracticaService } from '../serviciopractica.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-practica',
  imports: [NgFor],//NO IMPORTAR HTTP CLIENT PORQUE ESTA APPCONFIG.TS
  templateUrl: './practica.component.html',
  styleUrl: './practica.component.css'
})
export class PracticaComponent {

  public datos:any[]=[];//guardar los datos que se obtienen del servicio
  constructor(private servicio:ServiciopracticaService) { }//inyectar la dependencia del servicio
  ngOnInit(): void {
    this.servicio.getDatos().subscribe(
      (datos)=>{
        this.datos=datos;//renderiza y pinta en el template html
      }
      
    );
  }//cierra ng on init

}//CIERRA LA CLASE
