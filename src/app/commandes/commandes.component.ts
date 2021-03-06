import { Component, OnInit } from '@angular/core';
import {CommandeService} from '../shared/commande.service';
import {Commande} from '../model/commande';


@Component({
  selector: 'app-commandes',
  templateUrl: './commandes.component.html',
  styleUrls: ['./commandes.component.css']
})
export class CommandesComponent implements OnInit {
commandeList: Commande[];
  constructor(private commandeService: CommandeService) { }

  ngOnInit(): void {
    this.commandeService.getAllCommandes().subscribe(commandeList => this.commandeList = commandeList);
  }
  // tslint:disable-next-line:typedef
  deleteCom(commande){
    this.commandeService.deleteCommande(commande).subscribe(
      () => this.commandeList = this.commandeList.filter( fcommande => fcommande.id !== commande.id)
    );
  }

  // tslint:disable-next-line:typedef
  activer(commande) {
    commande.seen = true;
    this.commandeService.putCommande(commande).subscribe(   command => commande = command,
      error1 => {
        console.error('error updating commande');
      });
  }

  // tslint:disable-next-line:typedef
  desactiver(commande: Commande) {
    commande.seen = false;
    this.commandeService.putCommande(commande).subscribe(   command => commande = command,
      error1 => {
        console.error('error updating commande');
      });
  }
}
