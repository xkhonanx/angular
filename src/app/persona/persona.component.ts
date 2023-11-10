
import { Component, OnInit } from '@angular/core';
import { PersonaService } from './persona.service';


@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit{

  personas: any[] = [];
  persona: any;

  constructor(
    private personaService: PersonaService,
  ){}


  ngOnInit(): void {
    this.personaService.listarPersonas().subscribe(
      (data) => {
        this.personas = data
      },
      (error) => {
        console.error('Error al obtener los catalogos', error);
      }
    )

  }

  buscarPersona(idPersona: string){
    if(idPersona){
      this.personaService.mostrarPersona(idPersona).subscribe(
        (data) => {
          this.persona = data[0];
        },
        (error) => {
          console.error('Error al obtener los catalogos', error);
        }
      )
    }
  }

  handlesubmit(event: Event): void{
    event.preventDefault();
  }


}
