import {Component, Input, OnInit} from '@angular/core';
import {Plat} from '../model/plat';
import {UserService} from '../shared/user.service';
import {User} from '../model/user';
import {HomeComponent} from '../home/home.component';

@Component({
  selector: 'app-plat',
  templateUrl: './plat.component.html',
  styleUrls: ['./plat.component.css']
})
export class PlatComponent implements OnInit {
@Input() plat: Plat ;
  usersList: User[];
  current: User;
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe(usersList => this.usersList = usersList);

  }

  // tslint:disable-next-line:typedef
  ajout() {
    console.log(this.usersList[0]);
    this.current = new User();
    console.log(this.current);
    console.log( sessionStorage.getItem('id'));
    console.log( sessionStorage.getItem('id'));
    for ( const i in this.usersList ){
      if (this.usersList[i].id === Number(sessionStorage.getItem('id'))){
        this.current = this.usersList[i];
        console.log(this.current);
      }}
    this.current.panier.push(this.plat);
    this.userService.putUser(this.current).subscribe(
      user => this.current = user,
      error1 => {
        console.error('error updating user');
      });

  }
}
