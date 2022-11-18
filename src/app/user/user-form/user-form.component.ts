import {Component, Input, OnInit} from '@angular/core';
import {UserService} from "../user.service";
import {User} from "../user";
import {Router} from "@angular/router";

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {
  @Input() user: User;
  types: string[];
  isAddForm: boolean;

  constructor(
    private userService: UserService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.types = this.userService.getUserTypeList();
    this.isAddForm = this.router.url.includes('add');
  }
  hasType(type: string):boolean{
    return this.user.types.includes(type);
  }
  selectType($event: Event,type:string){
    const isChecked: boolean = ($event.target as HTMLInputElement).checked;
    if(isChecked){
      this.user.types.push(type);
    }else{
      const index = this.user.types.indexOf(type);
      this.user.types.splice(index,1);
    }
  }

  isTypesValid(type: string): boolean{
    if(this.user.types.length == 1 && this.hasType(type)){
      return false;
    }
    if(this.user.types.length > 2 && !this.hasType(type)){
      return false;
    }
    return true;
  }

  onSubmit(){
    if(this.isAddForm){
      this.userService.addUser(this.user).subscribe((user: User)=> {
        this.router.navigate(['/user', user.id]);
      })
    }else{
      this.userService.updateUser(this.user).subscribe(()=> {
        this.router.navigate(['/user', this.user.id]);
      })
    }
  }

}
