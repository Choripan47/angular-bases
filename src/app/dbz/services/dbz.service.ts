import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Injectable({providedIn: 'root'})
export class DbzService {
  constructor() { }

  public character: Character[] = [
    {
      id: uuid(),
      name: "Goku",
      power: 9000
    },
    {
      id: uuid(),
      name: "Krillin",
      power: 1000
    },
    {
      id: uuid(),
      name: "Vegeta",
      power: 5000
    },
    {
      id: uuid(),
      name: "cell",
      power:6000
    }
  ];

  addCharacter(character: Character): void{

    const newCharacter = {
      id: uuid(), ...character
    }

    this.character.push( newCharacter)
  }


  /*onDeleteCharacter(index: number): void{
    console.log("Main Page");
    console.log({ index });
    console.log("Eliminando items de lista");
    this.character.splice(index, 1)
  }*/

  deleteCharacterById( id: string): void{
    this.character = this.character.filter( character => character.id !== id)
  }
}
