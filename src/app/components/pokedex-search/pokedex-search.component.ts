import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pokedex-search',
  templateUrl: './pokedex-search.component.html',
  styleUrls: ['./pokedex-search.component.css']
})
export class PokedexSearchComponent {
  @Output() searchPokemon = new EventEmitter<string>();
  public pokemonId = '';

  onSubmit(e: Event): void {
    e.preventDefault();
    this.searchPokemon.emit(this.pokemonId);
    this.pokemonId = '';
  }

}
