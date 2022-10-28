import { Injectable } from '@angular/core';
import {User} from "./user";
import {POKEMONS} from "./mock-pokemon-list";

@Injectable()
export class UserService {

  getUserList(): User[]{
    return POKEMONS;
  }
  getUserById(userId: number): User|undefined{
    return POKEMONS.find(user=>user.id == userId);
  }
  getUserTypeList():string[]{
    return [
      'Plante',
      'Feu',
      'Eau',
      'Insecte',
      'Normal',
      'Electrik',
      'Poison',
      'Fée',
      'Vol',
      'Combat',
      'Psy'
    ];
  }
}
