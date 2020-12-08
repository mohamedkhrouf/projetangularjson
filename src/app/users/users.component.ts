import { Component, OnInit } from '@angular/core';
import {User} from '../model/user';
import {UserService} from '../shared/user.service';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  usersList: User[];
  keyword: any;
  par = 'all';
  constructor(private userService: UserService) {
  }
  ngOnInit(): void {
    this.userService.getAllUsers().subscribe(usersList => this.usersList = usersList);
  }
  // tslint:disable-next-line:typedef
  deleteUser(user){
    this.userService.deleteUser(user).subscribe(
      () => this.usersList = this.usersList.filter( fuser => fuser.id !== user.id)
    );
  }
// tslint:disable-next-line:typedef
func(){
  for ( const i in this.usersList ){
    if (this.usersList[i].id === Number(sessionStorage.getItem('id'))){
      return this.usersList[i].username;
    }}
}

  // tslint:disable-next-line:typedef
  recherche() {
if (this.par === 'email'){
  this.userService.rechercheEmail(this.keyword).subscribe(usersList => this.usersList = usersList);
}
if (this.par === 'username'){
  this.userService.rechercheUser(this.keyword).subscribe(usersList => this.usersList = usersList);
      }
if (this.par === 'all'){
      this.userService.rechercheM(this.keyword).subscribe(usersList => this.usersList = usersList);
    }

}


}
