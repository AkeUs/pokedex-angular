import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PokedexComponent } from './components/pokedex/pokedex.component';
import { PokedexSearchComponent } from './components/pokedex-search/pokedex-search.component';
import { PokedexCardComponent } from './components/pokedex-card/pokedex-card.component';
import { PokedexStatComponent } from './components/pokedex-stat/pokedex-stat.component';

@NgModule({
  declarations: [
    AppComponent,
    PokedexComponent,
    PokedexSearchComponent,
    PokedexCardComponent,
    PokedexStatComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
