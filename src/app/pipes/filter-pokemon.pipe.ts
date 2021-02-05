import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "filterPokemon",
})
export class FilterPokemonPipe implements PipeTransform {
  transform(value: any[], args: string): any[] {
    const resultArr = [];
    if (value.length === 0 || args === "") {
      return value;
    }
    for (let item of value) {
      if (item[args] === args) {
        resultArr.push(item);
      }
    }
    return resultArr;
  }
}
