import { Component, OnInit } from '@angular/core';
import { PokeApiService } from '../../services/poke-api.service';

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

  constructor(
    private pokeApi: PokeApiService
  ) { }

  ngOnInit(): void {
    this.searchPokemon();
  }

  searchPokemon(): void {
    this.pokeApi
      .getPokemonById(this.pokemonId)
      .subscribe((data: null) => {
        console.log(data);
        this.pokemon = data;
        this.loading = false;
        this.error = false;
      }, (error: any) => {
        console.error(error);
        this.loading = false;
        this.error = true;
    });
  }

}
