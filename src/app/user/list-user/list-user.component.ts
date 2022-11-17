import {Component, OnInit} from '@angular/core';
import {User} from "../user";
import {Router} from "@angular/router";
import {UserService} from "../user.service";

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
})
export class ListUserComponent implements OnInit{
  users: User[];

  constructor(private router: Router,private userService: UserService) {
  }
  ngOnInit(){
    this.userService.getUserList().subscribe(userList => this.users = userList);
  }

  goToUser(user: User){
    this.router.navigate(['/user',user.id]);
  }
}
