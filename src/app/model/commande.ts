import {Plat} from './plat';
import {User} from './user';

export class Commande {
  constructor() {
    this.user = new User();
    this.order = [];
  }

  id: number;
  user: User;
  order: Plat[];
  prix: number;
  seen: boolean;
  // tslint:disable-next-line:typedef

}
