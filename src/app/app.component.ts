import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  urlPhoto:string = ''
  namePokemon:string = ''
  typesPokemon:any[] = []
  weight!:number 
  height!:number
  abilities:any[] = []

  constructor(private api: ApiService){
    
  }

  ngOnInit() {
    this.nextPokemon();
  }

  nextPokemon(){
    this.api.obtenerPokemon().subscribe((res:any) => {
      this.urlPhoto = res.sprites.other.dream_world.front_default;
      this.namePokemon = res.name;
      this.typesPokemon = res.types;
      this.height = res.height;
      this.weight = res.weight;
      this.abilities = res.abilities;
    })
  }
}
