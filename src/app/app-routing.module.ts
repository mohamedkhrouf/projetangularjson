import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {SigninComponent} from './signin/signin.component';
import {UsersComponent} from './users/users.component';
import {UpdateUserComponent} from './update-user/update-user.component';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {MenuComponent} from './menu/menu.component';
import {AcceuilComponent} from './acceuil/acceuil.component';
import {PlatsComponent} from './plats/plats.component';
import {AddPlatComponent} from './add-plat/add-plat.component';
import {UpdatePlatComponent} from './update-plat/update-plat.component';
import {ImageUploadComponent} from './image-upload/image-upload.component';
import {PanierComponent} from './panier/panier.component';
import {CommandesComponent} from './commandes/commandes.component';
import {CommandeUserComponent} from './commande-user/commande-user.component';





const routes: Routes = [
  {path: 'signin', component: SigninComponent},
  { path: 'users', component: UsersComponent },
  { path: 'updateuser/:id', component: UpdateUserComponent },
  { path: 'login', component: LoginComponent },
  {path: 'home' , redirectTo: '/acceuil', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'acceuil', component: AcceuilComponent },
  { path: 'plats', component: PlatsComponent },
  { path: 'addplat', component: AddPlatComponent },
  { path: 'updateplat/:id', component: UpdatePlatComponent },
  { path: 'img', component: ImageUploadComponent },
  { path: 'panier', component: PanierComponent },
  { path: 'commandes', component: CommandesComponent},
  { path: 'commandeu', component: CommandeUserComponent},
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
