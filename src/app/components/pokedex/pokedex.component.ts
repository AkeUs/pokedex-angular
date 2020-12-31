import { Component, OnInit } from '@angular/core';
import { PokeApiService } from '../../services/poke-api.service';
import { Pokemon } from '../../Interfaces/pokemon';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css']
})
export class PokedexComponent implements OnInit {
  public loading = false;
  public error = false;
  public pokemon!: Pokemon;
  public pokemonId = Math.floor(Math.random() * 151).toString();

  constructor(
    private pokeApi: PokeApiService
  ) { }

  ngOnInit(): void {
    this.searchPokemon();
  }

  searchPokemon(): void {
    this.pokeApi
      .getPokemonById(this.pokemonId)
      .subscribe((data: Pokemon) => {
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

  handleSubmit(pokemonId: string): void {
    if (pokemonId !== '') {
      this.error = false;
      this.loading = true;
      // tslint:disable-next-line:radix
      this.pokemonId = window.isNaN(parseInt(pokemonId)) ? pokemonId.toLowerCase() : pokemonId;
      this.searchPokemon();
      return;
    }
    this.error = true;
  }

}
