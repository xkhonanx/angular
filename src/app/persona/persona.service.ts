import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  constructor (
    private http: HttpClient
  ){}

  listarPersonas() {
    return this.http.get<any>('http://localhost:4300/persona/listar')
  }

  mostrarPersona(id: any){
    return this.http.get<any>(`http://localhost:4300/persona/mostrar/${id}`)
  }
}
