import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  urlPhoto:string = ''
  namePokemon:string = ''
  typesPokemon:any[] = []
  weight!:number 
  height!:number
  abilities:any[] = []
  id!:number 
  dataPokemon:any[] = []

  constructor(private api: ApiService){
    
  }

  ngOnInit() {
    this.nextPokemon();
  }

  nextPokemon(){
    this.api.obtenerPokemon().subscribe((res:any) => {
      //console.log(res)
      this.urlPhoto = res.sprites.other.dream_world.front_default;
      this.namePokemon = res.name;
      this.typesPokemon = res.types;
      this.height = res.height;
      this.weight = res.weight;
      this.abilities = res.abilities;
      this.id = res.id;
    })
  }

  savePokemon(){
    this.dataPokemon = []
    let getData = localStorage.getItem('dataPokemon')
    if(getData){
      if(getData.length > 0) {
        const data = JSON.parse(getData)
        this.dataPokemon.push(...data);
      }
    }
    const saveData = {
      urlPhoto: this.urlPhoto,
      namePokemon: this.namePokemon,
      typesPokemon: this.typesPokemon,
      weight: this.weight,
      height: this.height,
      abilities: this.abilities,
      id: this.id
    }
    this.dataPokemon.push(saveData);
    localStorage.setItem('dataPokemon', JSON.stringify(this.dataPokemon));
    //const data = localStorage.getItem('name')
    //console.log(this.dataPokemon, "pokemon guardado");
  }
  
}
