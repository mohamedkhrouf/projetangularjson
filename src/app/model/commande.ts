import {Plat} from './plat';
import {User} from './user';

export class Commande {
  id: number;
  user: User;
  order: Plat[];
  prix: number;
}
