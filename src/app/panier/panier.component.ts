import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {UserService} from '../shared/user.service';
import {User} from '../model/user';
import {Plat} from '../model/plat';
import {Commande} from '../model/commande';
import {CommandeService} from '../shared/commande.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {
  user: User;
  usersList: User[];
  plats: Plat[];
  commande: Commande;
  a: number;
 prix = 0;
  constructor(private userService: UserService, private commandeService: CommandeService) { }

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe(usersList => this.usersList = usersList);
  }
// tslint:disable-next-line:typedef
panier(){
  for ( const i in this.usersList ){
    if (this.usersList[i].id === Number(sessionStorage.getItem('id'))){
      console.log(this.usersList[i].panier[1]);
      console.log(this.usersList[i]);
      return this.usersList[i].panier;
    }}

}

  // tslint:disable-next-line:typedef
  deletePlat(id: number) {
    for ( const i in this.usersList ){
      if (this.usersList[i].id === Number(sessionStorage.getItem('id'))){
      this.user = this.usersList[i];
      }}
    for ( const j in this.user.panier ){
      if (this.user.panier[j].id === id){
        this.a = Number(j);
      }}
    this.user.panier.splice(this.a);
    this.userService.putUser(this.user).subscribe(
      user => this.user = user,
      error1 => {
        console.error('error updating user');
      });
  }

  // tslint:disable-next-line:typedef
  prixtot() {
    for ( const i in this.usersList ){
      if (this.usersList[i].id === Number(sessionStorage.getItem('id'))){
        this.user = this.usersList[i];
      }}
    console.log(this.user);
    let pri = 0;
    for ( const panier of this.user.panier ){

pri = Number(panier.price) + pri;
console.log(pri);
      }
    return pri;
  }

  // tslint:disable-next-line:typedef
  buy() {
    this.commande = new Commande();
    for ( const i in this.usersList ){
      if (this.usersList[i].id === Number(sessionStorage.getItem('id'))){
        this.user = this.usersList[i];
      }}
    let pri = 0;
    for ( const panier of this.user.panier ){
      console.log(panier);
      pri = Number(panier.price) + pri;
    }
    this.commande.user = this.user;
    this.commande.order = this.user.panier;
    this.commande.prix = pri;
    console.log(this.commande);
    this.user.panier = [];
    this.userService.putUser(this.user).subscribe(
      user => this.user = user,
      error1 => {
        console.error('error updating user');
      });
    this.commandeService.postCommande(this.commande).subscribe(commande => this.commande = commande);

  }
}
