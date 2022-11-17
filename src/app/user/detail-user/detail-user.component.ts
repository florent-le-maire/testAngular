import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {User} from "../user";
import {UserService} from "../user.service";

@Component({
  selector: 'app-detail-user',
  templateUrl: './detail-user.component.html',
  styleUrls: ['./detail-user.component.scss']
})
export class DetailUserComponent implements OnInit {
  userList : User[];
  user : User|undefined;

  constructor(private route: ActivatedRoute,private router: Router,private userService: UserService) { }

  ngOnInit(): void {
    const userId: string|null = this.route.snapshot.paramMap.get('id');
    if(userId){
      this.userService.getUserById(+userId).subscribe(user => this.user = user);
    }
  }
  deleteUser(user: User){
    this.userService.deleteUserById(user.id).subscribe(
      ()=>this.goToUserList()
    );
  }
  goToUserList(): void{
    this.router.navigate(['/users']);
  }

  goToEditUser(user: User){
    this.router.navigate(['/edit/user',user.id]);
  }
}
