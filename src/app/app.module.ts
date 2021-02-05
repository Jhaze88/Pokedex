import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FormsModule } from "@angular/forms";
import { PokedexComponent } from "./components/pokedex/pokedex.component";
import { HttpClientModule } from "@angular/common/http";
import { ApiPokemonService } from "./services/api-pokemon.service";
import { ApiPokemonImageService } from "./services/api-pokemon-image.service";
import { FilterPokemonPipe } from './pipes/filter-pokemon.pipe';

@NgModule({
  declarations: [AppComponent, PokedexComponent, FilterPokemonPipe],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [ApiPokemonService, ApiPokemonImageService],
  bootstrap: [AppComponent],
})
export class AppModule {}
