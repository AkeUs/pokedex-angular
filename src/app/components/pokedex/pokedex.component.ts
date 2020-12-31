import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css']
})
export class PokedexComponent implements OnInit {

  public loading = false;
  public error = false;
  public pokemon = null;
  public pokemonId = Math.floor(Math.random() * 151);

  constructor() { }

  ngOnInit(): void {
  }

}
