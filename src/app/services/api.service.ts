import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  obtenerPokemon(min:number= 1, max:number= 151){
    const id =  Math.floor(Math.random() * (max - min) + min);
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
  }
}
