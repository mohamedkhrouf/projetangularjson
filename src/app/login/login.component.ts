import { Component, OnInit } from '@angular/core';
import {UserService} from '../shared/user.service';
import {User} from '../model/user';

import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username ;
  password;
  usersList: User[];
  erreur;
  show;
   erreur1;
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe(usersList => this.usersList = usersList);
  }
  onChecked(message: gapi.auth2.GoogleUser): void {
    this.show = message;
    if (this.show !== undefined){
       this.show.getBasicProfile().getEmail();
       this.show.getBasicProfile().getName();
       for (const i in this.usersList){

         // tslint:disable-next-line:max-line-length
        if (this.usersList[i].username === this.show.getBasicProfile().getName() && this.usersList[i].email === this.show.getBasicProfile().getEmail()){
          sessionStorage.setItem('id', String(this.usersList[i].id));
          if (this.usersList[i].admin === true){
            this.router.navigate(['/home']);
          }else {
            this.router.navigate(['/home']);
          }
        }else{
          this.erreur1 = true ;
        }

      }
    }
  }
  // tslint:disable-next-line:typedef
  connect() {
for (const i in this.usersList){
  if (  this.usersList[i].username === this.username && this.usersList[i].password === this.password  ){
    sessionStorage.setItem('id', String(this.usersList[i].id));
    if (this.usersList[i].admin === true){
      this.router.navigate(['/acceuil']);
    }else {
      this.router.navigate(['/acceuil']);
    }
  }else{
    this.erreur = true ;
  }

}
  }
}
