import { Component, OnInit } from '@angular/core';
import { ApirickService } from './../apirick.service';
import { Personaje } from './modelo/personaje'
@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.page.html',
  styleUrls: ['./personajes.page.scss'],
})
export class PersonajesPage implements OnInit {
  public personajes: Array<Personaje> = [];
  constructor(public apiRick: ApirickService) { }

  ngOnInit(
  ) {
    this.apiRick.obtenerPersonaje()
      .subscribe(losDatos => {
        this.personajes = losDatos.results
      });
  }
}


