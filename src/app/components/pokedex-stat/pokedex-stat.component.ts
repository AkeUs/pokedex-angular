import { Component, Input } from '@angular/core';
import { PokemonStat } from '../../Interfaces/pokemon-stat';

@Component({
  selector: 'app-pokedex-stat',
  templateUrl: './pokedex-stat.component.html',
  styleUrls: ['./pokedex-stat.component.css']
})
export class PokedexStatComponent {
  @Input() public item!: PokemonStat;
}
