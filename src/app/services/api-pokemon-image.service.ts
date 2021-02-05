import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ApiPokemonImageService {
  apiImagePokemon: string;
  id: number;

  constructor(private http: HttpClient) {
    this.apiImagePokemon =
      "https://pokeres.bastionbot.org/images/pokemon/1.png";
    this.id = 1;
  }

  getImage(): Observable<any> {
    return this.http.get<any>(this.apiImagePokemon);
  }

  avantiImg(): Observable<any> {
    if (this.id > 151) {
      this.id = 1;
    }
    return this.http.get<any>(
      "https://pokeres.bastionbot.org/images/pokemon/" + this.id++ + ".png"
    );
  }
}
