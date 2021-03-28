import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Disco } from "../model/disco"

@Injectable({
  providedIn: 'root'
})
export class DiscoService {
  private url="http://localhost:3000/discos"
  
  constructor(private http: HttpClient) {
    
   }

  obtenerDisco(id:number){
    if (id!=NaN) {
      return this.http.get(this.url+"?id="+id)
    }else{   
      return this.http.get(this.url+"/")
    }
    
  }

  meterDisco(disco:Disco){
    return this.http.post(this.url,disco)
  }
  actualizarDisco(disco:Disco){
    return this.http.put(this.url,disco)
  }

  borrarDisco(id:number){
    
      return this.http.delete(this.url +"?id="+ id)
  }
}
