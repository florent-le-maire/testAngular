import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ListUserComponent} from "./list-user/list-user.component";
import {DetailUserComponent} from "./detail-user/detail-user.component";
import {BorderCardDirective} from "./border-card.directive";
import {UserTypeColorPipe} from "./user-type-color.pipe";
import {RouterModule, Routes} from "@angular/router";
import {UserService} from "./user.service";

const userRoutes:Routes=[
  {path:"users",component:ListUserComponent},
  {path:"user/:id",component:DetailUserComponent},
]

@NgModule({
  declarations: [
    ListUserComponent,
    DetailUserComponent,
    BorderCardDirective,
    UserTypeColorPipe
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(userRoutes)
  ],
  providers:[
    UserService
  ]
})
export class UserModule { }
