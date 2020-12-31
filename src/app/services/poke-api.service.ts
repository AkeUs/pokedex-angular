import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {
  private baseUrl = 'https://pokeapi.co/api/v2';

  constructor(
    private http: HttpClient
  ) { }

  getPokemonById(pokemonId: number|string): any {
    return this.http.get(`${this.baseUrl}/pokemon/${pokemonId}`);
  }

}
