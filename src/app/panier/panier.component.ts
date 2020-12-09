import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {UserService} from '../shared/user.service';
import {User} from '../model/user';
import {Plat} from '../model/plat';
import {Commande} from '../model/commande';
import {CommandeService} from '../shared/commande.service';
import {Router} from '@angular/router';

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
  constructor(private userService: UserService, private commandeService: CommandeService, private router: Router) { }

  ngOnInit(): void {
    this.commande = new Commande();
    this.user = new User();
    this.user.panier = [];
    this.userService.getUserById(Number(sessionStorage.getItem('id'))).subscribe(user => this.user = user);
    console.log(this.user);
  }


  // tslint:disable-next-line:typedef
  deletePlat(id: number) {

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
    let pri = 0;
    for ( const panier of this.user.panier ){

pri = Number(panier.price) + pri;
console.log(pri);
      }
    return pri;
  }
// tslint:disable-next-line:typedef
delete(){

  this.user.panier = [];
  console.log(this.user);
  this.userService.putUser(this.user).subscribe(
    user => this.user = user,
    error1 => {
      console.error('error updating user');
    });
}
  // tslint:disable-next-line:typedef
  buy() {
    this.commande = new Commande();
    console.log(this.commande);
    this.commande.user = this.user;
    this.commande.order = this.user.panier;
    this.commande.prix = this.prixtot();
    console.log(this.commande);
    console.log(this.user);
    this.commandeService.postCommande(this.commande).subscribe(fcommande => this.commande = fcommande
    , () => { console.log('complete'); },
      () => { this.delete();}
      );
  }
}
