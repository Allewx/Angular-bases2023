import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from "uuid";



@Injectable({ providedIn: 'root' })

export class DbzService {

  public character: Character[] = [

    {
      id: uuid(),
      name: "Cell",
      power: 16000,
      status: "OK"
    },
    {
      id: uuid(),
      name: "Magin-Boo",
      power: 2600,
      status: "Error"
    },
    {
      id: uuid(),
      name: "Vegeta",
      power: 3600,
      status: "OK"
    }
  ];


  public AddCharacter(character: Character): void {

    const newCharacter: Character = { id: uuid(), ...character };

    console.log(character);
    this.character.push(newCharacter);
    console.log(this.character);


  }

  /*  public onDeleteIdP(index: number) {
     this.character.splice(index, 1)

   } */
  public onDeleteByid(id: string) {
    this.character = this.character.filter(character => character.id !== id);

  }


}
