import { Character } from './../interfaces/character.interface';
import { Component, numberAttribute } from '@angular/core';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: "./main-page.component.html"
})

export class MainPageComponent  {

  public character: Character[] = [
    {
      name: "Goku",
      power: 9000
    },
    {
      name: "Krillin",
      power: 1000
    },
    {
      name: "Vegeta",
      power: 5000
    },
    {
      name: "cell",
      power:6000
    }
  ];

  onNewCharacter(character: Character): void{
    this.character.push( {name:character.name, power:character.power})
  }


  onDeleteCharacter(index: number): void{
    console.log("Main Page");
    console.log({ index });
    console.log("Eliminando items de lista");
    this.character.splice(index, 1)
  }

}
