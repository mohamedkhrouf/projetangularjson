import {Plat} from './plat';

export class User {
  id: number;
  username: string;
  email: string;
  password: string;
  admin: boolean;
  panier: Plat[];
}
