import { PokemonStat } from './pokemon-stat';
import { PokemonType } from './pokemon-type';

export interface Pokemon {
  id: number;
  name: string;
  sprites: {
    front_default: string,
    back_default: string
  };
  stats: [PokemonStat];
  types: [PokemonType];
}
