import { Component, OnInit } from '@angular/core';

import {Plat} from '../model/plat';

import {PlatService} from '../shared/plat.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  platsList: Plat[];
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
}
