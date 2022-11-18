import { Injectable } from '@angular/core';
import {User} from "./user";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, Observable, of, tap} from "rxjs";

@Injectable()
export class UserService {

  constructor(private http: HttpClient) {
  }

  getUserList(): Observable<User[]>{
    return this.http.get<User[]>('api/pokemons').pipe(
      tap((userList)=> this.log(userList)),
      catchError((error)=>this.handleError(error,[]))
    );
  }
  getUserById(userId: number): Observable<User|undefined>{
    return this.http.get<User>(`api/pokemons/${userId}`).pipe(
      tap((user)=> this.log(user)),
      catchError((error)=>this.handleError(error,undefined))
    );
  }

  searchUserList(term: string): Observable<User[]>{
    if(term.length <= 1){
      return of([]);
    }
    return this.http.get<User[]>(`api/pokemons/?name=${term}`).pipe(
      tap((user)=> this.log(user)),
      catchError((error)=>this.handleError(error,[]))
    );
  }

  updateUser(user: User): Observable<null>{
    const httpOptions = {
      headers : new HttpHeaders({'Content-Type':'application/json'})
    };
    return this.http.put('api/pokemons',user,httpOptions).pipe(
      tap((response)=> this.log(response)),
      catchError((error)=>this.handleError(error,null))
    );
  }

  addUser(user: User): Observable<User>{
    const httpOptions = {
      headers : new HttpHeaders({'Content-Type':'application/json'})
    };
    return this.http.post<User>('api/pokemons',user,httpOptions).pipe(
      tap((response)=> this.log(response)),
      catchError((error)=>this.handleError(error,null))
    );
  }

  deleteUserById(userId: number): Observable<null>{
    return this.http.delete(`api/pokemons/${userId}`).pipe(
      tap((response)=> this.log(response)),
      catchError((error)=>this.handleError(error,null))
    )
  }

  private log(response: any){
    console.table(response);
  }
  private handleError(error: Error, errorValue: any){
    console.error(error);
    return of(errorValue);
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
