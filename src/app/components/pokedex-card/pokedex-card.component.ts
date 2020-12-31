import { Component, Input } from '@angular/core';
import { Pokemon } from '../../Interfaces/pokemon';

@Component({
  selector: 'app-pokedex-card',
  templateUrl: './pokedex-card.component.html',
  styleUrls: ['./pokedex-card.component.css']
})
export class PokedexCardComponent {
  @Input() public loading!: boolean;
  @Input() public error!: boolean;
  @Input() public pokemon!: Pokemon;

}
