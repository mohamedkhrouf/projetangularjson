import { Component, OnInit } from '@angular/core';
import {UserService} from '../shared/user.service';
import {ActivatedRoute} from '@angular/router';
import {User} from '../model/user';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  user: User;
 userc: User;
  constructor(private userService: UserService, private service: ActivatedRoute) { }
usersList: User[];
  ngOnInit(): void {
    this.user = new User();
    this.userService.getUserById(this.service.snapshot.params.id).subscribe( user => this.user = user);
    this.userService.getAllUsers().subscribe(usersList => this.usersList = usersList);
    this.userService.getUserById(Number(sessionStorage.getItem('id'))).subscribe( user => this.userc = user);
  }
  // tslint:disable-next-line:typedef
  save(){
    this.userService.putUser(this.user).subscribe(
      user => this.user = user,
      error1 => {
        console.error('error updating user');
      }
    );
  }
  // tslint:disable-next-line:typedef
  uniqUsername(){
    let n = 0 ;
    // tslint:disable-next-line:forin
    for (const i in this.usersList){
      if (( this.usersList[i].username === this.user.username) && (this.usersList[i].id !== this.user.id)){
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
      if (( this.usersList[i].email === this.user.email) && (this.usersList[i].id !== this.user.id)){
        n++;
      }
    }
    console.log(n);
    return n !== 0 ;

  }
}
