import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ListUserComponent} from "./list-user/list-user.component";
import {DetailUserComponent} from "./detail-user/detail-user.component";
import {BorderCardDirective} from "./border-card.directive";
import {UserTypeColorPipe} from "./user-type-color.pipe";
import {RouterModule, Routes} from "@angular/router";
import {UserService} from "./user.service";
import {FormsModule} from "@angular/forms";
import { UserFormComponent } from './user-form/user-form.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { AddUserComponent } from './add-user/add-user.component';
import { SearchUserComponent } from './search-user/search-user.component';
import { LoaderComponent } from './loader/loader.component';
import { AuthGuard } from "../auth.guard";

const userRoutes:Routes=[
  {path:"edit/user/:id",component:EditUserComponent, canActivate: [AuthGuard]},
  {path:"user/add",component:AddUserComponent, canActivate: [AuthGuard]},
  {path:"users",component:ListUserComponent, canActivate: [AuthGuard]},
  {path:"user/:id",component:DetailUserComponent, canActivate: [AuthGuard]},
]

@NgModule({
  declarations: [
    ListUserComponent,
    DetailUserComponent,
    BorderCardDirective,
    UserTypeColorPipe,
    UserFormComponent,
    EditUserComponent,
    AddUserComponent,
    SearchUserComponent,
    LoaderComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(userRoutes)
  ],
  providers:[
    UserService
  ]
})
export class UserModule { }
