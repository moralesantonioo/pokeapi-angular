import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  datos:any[] = [];
  constructor() { };
  id?:number

  ngOnInit(): void {
    this.datos = JSON.parse(localStorage.getItem('dataPokemon') || '')
    console.log(this.datos)
    this.datos.forEach((e) => {
      this.id = e.id
      console.log(e.id)
    })
  }
}
