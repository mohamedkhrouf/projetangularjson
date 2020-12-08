import { Component, OnInit } from '@angular/core';
import {UserService} from '../shared/user.service';
import {User} from '../model/user';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private usersList: User[];
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe(usersList => this.usersList = usersList);
    console.log(Number(sessionStorage.getItem('id')));
  }
  // tslint:disable-next-line:typedef
  user(){
    for ( const i in this.usersList ){
      if (this.usersList[i].id === Number(sessionStorage.getItem('id'))){
        return this.usersList[i];
      }}
  }
  // tslint:disable-next-line:typedef
  logout(){
    sessionStorage.removeItem('id');
    alert('disconnected');
  }
}
