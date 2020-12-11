import { Component, OnInit } from '@angular/core';
import {UserService} from '../shared/user.service';
import {User} from '../model/user';

import {Router} from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
   user: User;
  usersList: User[];
list: User[];
  show: gapi.auth2.GoogleUser;
  email = '';
  username = '';
user1: User;
  constructor( private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.user1 = new User();
    this.user = new User();
    this.userService.getAllUsers().subscribe(usersList => this.usersList = usersList);

  }

  onChecked(message: gapi.auth2.GoogleUser): void {
    this.show = message;
    if (this.show !== undefined){
      let n = false;
      for (const i in this.usersList){

        // tslint:disable-next-line:max-line-length
        if (this.usersList[i].username === this.show.getBasicProfile().getName() && this.usersList[i].email === this.show.getBasicProfile().getEmail()){
          sessionStorage.setItem('id', String(this.usersList[i].id));
          n = true;
          if (this.usersList[i].admin === true){
            this.router.navigate(['/home']);
          }else {
            this.router.navigate(['/home']);
          }
        }else{
        }

      }
      if (n === false){
        this.email = this.show.getBasicProfile().getEmail();
        this.username = this.show.getBasicProfile().getName();
        this.user1.email = this.email;
        this.user1.username = this.username;
        this.user1.password = '123';
        this.user1.admin = false;
        this.user1.panier = [];
        this.userService.postUser(this.user1).subscribe(
          user => this.user1 = user
        );
        sessionStorage.setItem('id', String(this.usersList[this.usersList.length - 1].id + 1));
        // @ts-ignore
        this.router.navigate(['/home']);
      }
    }
  }
// tslint:disable-next-line:typedef
uniqUsername(){
  let n = 0 ;
  // tslint:disable-next-line:forin
  for (const i in this.usersList){
if ( this.usersList[i].username === this.user.username){
  n++;
}

  }
  console.log(n);
  return n !== 0 ;

}
  // tslint:disable-next-line:typedef
  uniqEmail(){
    let n = 0 ;
    // tslint:disable-next-line:forin
    for (const i in this.usersList){
      if ( this.usersList[i].email === this.user.email){
        n++;
      }

    }
    console.log(n);
    return n !== 0 ;

  }
  // tslint:disable-next-line:typedef
  add(){
    console.log(this.user.id);
    this.user.admin = false;
    this.user.panier = [];
    this.userService.postUser(this.user).subscribe(
      user => this.user = user
    );
    sessionStorage.setItem('id', String(this.usersList[this.usersList.length - 1].id + 1));
    this.router.navigate(['/home']);
    this.router.navigate(['/acceuil']);
}


  // tslint:disable-next-line:typedef
  link() {
    return '/users';
  }
}
