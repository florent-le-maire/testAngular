import { Component } from '@angular/core';
import {POKEMONS} from "./user/mock-pokemon-list";
import {User} from "./user/user";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // users: User[] = POKEMONS;
  // userSelected: User|undefined;
  //
  // ngOnInit(): void {
  //   console.table(this.users);
  //   // this.selectUsers(this.users[0])
  // }
  // selectUsers(userId: string){
  //   const user: User|undefined = this.users.find(user => user.id == +userId);
  //   if(user){
  //     console.log(`vous avez cliqué sur ${user.name}`);
  //     this.userSelected = user;
  //   }else{
  //     console.log(`User n'existe pas`);
  //     this.userSelected = user;
  //   }
  // }
}
