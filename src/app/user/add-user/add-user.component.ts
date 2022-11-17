import { Component, OnInit } from '@angular/core';
import {User} from "../user";

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  user: User;
  constructor() { }

  ngOnInit(): void {
    this.user = new User();
  }

}
