import { Component, OnInit } from '@angular/core';

import {Plat} from '../model/plat';

import {PlatService} from '../shared/plat.service';


@Component({
  selector: 'app-products',
  templateUrl: './plats.component.html',
  styleUrls: ['./plats.component.css']
})
export class PlatsComponent implements OnInit {
  platsList: Plat[];
  categ: string;
  actDessert: string;
  actMain: string;
  actStarter: string;
  actAll = 'hvr-radial-in active';
  private a = true ;

  constructor(private platService: PlatService) { }


  ngOnInit(): void {
    this.platService.getAllPlats().subscribe(platsList => this.platsList = platsList);

  }
  // tslint:disable-next-line:typedef
  deletePlat(plat){
    this.platService.deletePlat(plat).subscribe(
      () => this.platsList = this.platsList.filter( fplat => fplat.id !== plat.id)
    );
  }


  // tslint:disable-next-line:typedef
  dessert() {
   this.categ = 'dessert';
   this.actDessert = 'hvr-radial-in active';
   this.actMain = 'hvr-radial-in';
   this.actStarter = 'hvr-radial-in';
   this.actAll = 'hvr-radial-in';
   this.a = false;
  }

  // tslint:disable-next-line:typedef
  main() {
    this.categ = 'main';
    this.actDessert = 'hvr-radial-in ';
    this.actMain = 'hvr-radial-in active';
    this.actStarter = 'hvr-radial-in';
    this.actAll = 'hvr-radial-in';
    this.a = false;
  }

  // tslint:disable-next-line:typedef
  starter() {
    this.categ = 'starter';
    this.actDessert = 'hvr-radial-in ';
    this.actMain = 'hvr-radial-in ';
    this.actStarter = 'hvr-radial-in active';
    this.actAll = 'hvr-radial-in';
    this.a = false;
  }

  // tslint:disable-next-line:typedef
  all() {
    this.a = true;
    this.actDessert = 'hvr-radial-in ';
    this.actMain = 'hvr-radial-in ';
    this.actStarter = 'hvr-radial-in ';
    this.actAll = 'hvr-radial-in active';
  }
}


