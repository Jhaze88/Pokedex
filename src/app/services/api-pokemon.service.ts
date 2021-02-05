import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { PokemonData } from "../interface/pokemonData";

@Injectable({
  providedIn: "root",
})
export class ApiPokemonService {
  apiPokemon: string;
  idNumber: number;
  idPokemon: number;
  url: string;
  namePokemon: string;
  pokemonList: any[];
  apiTypes: string;

  constructor(private http: HttpClient) {
    this.apiPokemon = `https://pokeapi.co/api/v2/pokemon/`;
    this.idNumber = +1;
    this.apiTypes = "https://pokeapi.co/api/v2/";
  }

  getPokemon(): Observable<PokemonData> {
    return this.http.get<PokemonData>(this.apiPokemon);
  }
  getData(id: number): Observable<PokemonData> {
    return this.http.get<PokemonData>(
      `https://pokeapi.co/api/v2/pokemon/${id}`
    );
  }
  getName(name: any): Observable<any> {
    // let a = [];
    // name = a.filter((item) => {
    //   return item.name.indexOf("a", 0) > -1;
    // });
    // console.log("AAA-->", a);

    return this.http.get<any>(`https://pokeapi.co/api/v2/pokemon/${name}`);
  }

  getType(): Observable<any> {
    return this.http.get<any>(`https://pokeapi.co/api/v2/type/`);
  }

  // avantiId(): Observable<any> {
  //   if (this.idNumber >= 300) {
  //     this.idNumber = 1;
  //   }
  //   return this.http.get<any>(
  //     "https://pokeapi.co/api/v2/pokemon/" + ++this.idNumber
  //   );
  // }

  // indietroId(): Observable<any> {
  //   if (this.idNumber <= 1) {
  //     this.idNumber = 300;
  //   }

  //   if (this.idNumber <= 1) {
  //     this.idNumber = 300;
  //   }
  //   return this.http.get<any>(
  //     "https://pokeapi.co/api/v2/pokemon/" + --this.idNumber
  //   );
  // }
}

// https://pokeres.bastionbot.org/images/pokemon/1.png
