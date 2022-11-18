import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {debounceTime, distinctUntilChanged, Observable, Subject, switchMap} from "rxjs";
import {User} from "../user";
import {UserService} from "../user.service";

@Component({
  selector: 'app-search-user',
  templateUrl: './search-user.component.html',
  styleUrls: ['./search-user.component.scss']
})
export class SearchUserComponent implements OnInit {
  searchTerms = new Subject<string>();
  users$: Observable<User[]>;

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.users$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term) => this.userService.searchUserList(term))
    );
  }

  search(term: string){
    this.searchTerms.next(term);
  }
  goToDetail(user: User){
    const link = ['/user',user.id];
    this.router.navigate(link);
  }
}
