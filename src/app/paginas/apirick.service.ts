import { Injectable } from '@angular/core';
import { Personaje } from './personajes/modelo/personaje';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApirickService {
  public personaje_url: string = 'https://rickandmortyapi.com/api/character';
  constructor(
    private cliente: HttpClient
  ) { }
  public obtenerPersonaje(): Observable<Personaje>{
    return this.cliente.get<Personaje>(this.personaje_url);
  }
}
