import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-infopersonaje',
  templateUrl: './infopersonaje.page.html',
  styleUrls: ['./infopersonaje.page.scss'],
})
export class InfopersonajePage implements OnInit {
  personajeId: string;
  character;
  constructor(
    private activaedRoute: ActivatedRoute,
    private http: HttpClient,) { }


  ngOnInit( ) {
     console.log(
      this.personajeId = this.activaedRoute.snapshot.paramMap.get('id'));
      this.http.get('https://rickandmortyapi.com/api/character/' + this.personajeId).subscribe(res =>{this.character = res})
  }

}
