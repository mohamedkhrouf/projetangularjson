import { Component, OnInit } from '@angular/core';
import {Commande} from '../model/commande';
import {CommandeService} from '../shared/commande.service';


@Component({
  selector: 'app-commande-user',
  templateUrl: './commande-user.component.html',
  styleUrls: ['./commande-user.component.css']
})
export class CommandeUserComponent implements OnInit {
  commandeList = [];
  commande = [];
  id;

  constructor(private commandeService: CommandeService) {
  }

  ngOnInit(): void {
    this.id = Number(sessionStorage.getItem('id'));
    this.commandeService.getAllCommandes().subscribe(commandeList => this.commandeList = commandeList);
  }

  // tslint:disable-next-line:typedef
  deleteCom(commande) {
    this.commandeService.deleteCommande(commande).subscribe(
      () => this.commandeList = this.commandeList.filter(fcommande => fcommande.id !== commande.id)
    );
  }

  // tslint:disable-next-line:typedef

}


