import { Component, OnInit } from '@angular/core';
import { Disco } from 'src/app/model/disco';
import { DiscoService } from 'src/app/shared/disco.service';

@Component({
  selector: 'app-vista-disco',
  templateUrl: './vista-disco.component.html',
  styleUrls: ['./vista-disco.component.css']
})
export class VistaDiscoComponent implements OnInit {
  public discos:Disco[]
  public mensaje:String
  public pulsar:boolean
  constructor(private discoService:DiscoService) { 
    
    this.pulsar=false;
  }

  mostrarDisco(id:number){
    this.pulsar=true
    console.log(id)
    if (id!=NaN) {
      this.discoService.obtenerDisco(id).subscribe((data:any[]) =>
    {
      
     if (data[1]=='No existe el disco') {
       this.mensaje=data[1]
     }else{ this.discos=data}
       
      
      
      
      
    })
    }else{
    this.discoService.obtenerDisco(id).subscribe((data:Disco[]) =>
    {
      this.discos=data 
    })
    }
  }
 

  ngOnInit(): void {
  }

}
