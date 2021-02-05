import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { ApiPokemonService } from "src/app/services/api-pokemon.service";

@Component({
  selector: "app-pokedex",
  templateUrl: "./pokedex.component.html",
  styleUrls: ["./pokedex.component.scss"],
})
export class PokedexComponent implements OnInit {
  pokemon: any;
  pokemonTypes: string;
  img: string;
  btnDis: boolean;
  arrayStat: Array<any>;
  pokemonId: number;

  constructor(private apiPokemon: ApiPokemonService) {
    this.arrayStat = [];

    this.img = "";

    this.pokemonId = 1;
  }

  ngOnInit(): void {
    this.loadFirstpokemon();
    this.loadPokemon();
  }
  loadPokemon() {
    this.apiPokemon.getPokemon().subscribe((data) => {
      console.log("DATA-->", data.results);
      this.apiPokemon.pokemonList = data.results;
      console.log("DATARES-->", this.apiPokemon.pokemonList);
      this.img =
        "https://pokeres.bastionbot.org/images/pokemon/" +
        this.pokemonId +
        ".png";
    });
    this.apiPokemon.getType().subscribe((type) => {
      console.log("TYPE-->", type.results);
      this.pokemonTypes = type.results;
    });
  }

  loadFirstpokemon() {
    this.apiPokemon.getData(this.pokemonId).subscribe((data) => {
      console.log("DATALOAD-->", data);
      this.pokemon = data;
    });
  }
  movePokemon(isNext: boolean) {
    if (isNext) {
      this.pokemonId++;
    } else {
      this.pokemonId--;
    }

    this.apiPokemon.getData(this.pokemonId).subscribe((data) => {
      console.log("DATAID-->", data);
      this.pokemon = data;
      this.img =
        "https://pokeres.bastionbot.org/images/pokemon/" +
        this.pokemonId +
        ".png";
    });
  }

  searchPokemon(p: NgForm) {
    console.log("FILTER-->", p);

    this.apiPokemon.getName(p.value.pokemon).subscribe((data) => {
      console.log("DATAFILTER-->", data);
      let value = p.value.pokemon;
      this.pokemon = data;
      this.img = `https://pokeres.bastionbot.org/images/pokemon/${data.id}.png`;
      let arr = [];
      this.apiPokemon.pokemonList.push(data.name);
      console.log("LIST-->", this.apiPokemon.pokemonList);
      this.apiPokemon.pokemonList.filter((data) => {
        console.log("NAMEFILTER-->", data);
        data.toLowerCase().match(value.toLowerCase());
      });
    });
  }
}

// arr.push(List);
// List.filter((a) => {
//   console.log("A-->", a);

//   a.toLowerCase() !== value.toLowerCase();
// });

// this.pokemons.push(data);
// console.log("POKEMONS-->", this.pokemons);
// for (let stat of data.stats) {
//   this.arrayStat.push(stat);
// }
// this.arrayStat.splice(0, 6);
// this.pokemon = this.pokemons.filter((a) => {
//   console.log("A-->", a.name);
//   // let pArr = [];
//   // pArr.push(data.name)
//   a.name.toLowerCase() !== value.toLowerCase();

//   console.log("POKEMON-->", this.pokemon);
// });
