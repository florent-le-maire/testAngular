import { Component, OnInit } from '@angular/core';
import {AuthService} from "../auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  message: string = 'Vous etes déconnecté';
  name: string;
  password: string;
  auth: AuthService;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.auth = this.authService;
  }

  setMessage(){
    if(this.auth.isLoggedIn){
      this.message = 'Vous etes connecté';
    }else{
      this.message = 'Identifiant ou mot de passe incorrect';
    }
  }

  login(){
    this.message = 'Tentative de connexion en cours...';
    this.auth.login(this.name,this.password)
      .subscribe((isLoggedIn: boolean) =>{
        this.setMessage();
        if(isLoggedIn){
          this.router.navigate(['/users']);
        }else{
          this.password = '';
          this.router.navigate(['/login']);
        }
      })
  }

  logout(){
    this.auth.logout();
    this.message = 'Vous etes déco';
  }

}
