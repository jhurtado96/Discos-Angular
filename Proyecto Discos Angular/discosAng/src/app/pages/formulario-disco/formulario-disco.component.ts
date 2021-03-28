import { Component, OnInit } from '@angular/core';
import { Disco } from 'src/app/model/disco';
import { DiscoService } from 'src/app/shared/disco.service';

@Component({
  selector: 'app-formulario-disco',
  templateUrl: './formulario-disco.component.html',
  styleUrls: ['./formulario-disco.component.css']
})
export class FormularioDiscoComponent implements OnInit {
  public mensaje:String
  constructor(private discoService: DiscoService) { }

  ngOnInit(): void {
  }

  insertarDisco(titulo:string,interprete:string,anyoPublicacion:number){
    this.discoService.meterDisco(new Disco(0,titulo,interprete,anyoPublicacion))
    .subscribe((data:any) =>
    {
    if (data.mensaje == 'disco añadido') {
      this.mensaje=data.mensaje
    } else{
      this.mensaje=data.mensaje
    }
    })
  }

  modificarDisco(id:number,titulo:string,interprete:string,anyoPublicacion:number){
    this.discoService.actualizarDisco(new Disco(id,titulo,interprete,anyoPublicacion))
    .subscribe((data:any) =>{

      if (data.affectedRows==0) {
        this.mensaje=data.mensaje
      
        // if (data.mensaje=='Disco modificado') {
        //   this.mensaje=data.mensaje
        }else{
          this.mensaje=data.mensaje
        }
      
      
    })
  }

  quitarDisco(id:number){
    console.log(id)
    this.discoService.borrarDisco(Number(id))
    .subscribe((data:any) =>{
      
      if (data.affectedRows==0) {
        this.mensaje=data.mensaje
        }else{
          this.mensaje=data.mensaje
        }
      
      
    })
  }

}
