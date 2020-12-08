import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SigninComponent } from './signin/signin.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UsersComponent } from './users/users.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import {AcceuilComponent} from './acceuil/acceuil.component';
import { PlatsComponent } from './plats/plats.component';
import { AddPlatComponent } from './add-plat/add-plat.component';
import { UpdatePlatComponent } from './update-plat/update-plat.component';
import { ImageUploadComponent } from './image-upload/image-upload.component';
import { PlatComponent } from './plat/plat.component';
import { PanierComponent } from './panier/panier.component';
import { CommandesComponent } from './commandes/commandes.component';
import { AuthButtonComponent } from './auth-button/auth-button.component';
import { CommandeUserComponent } from './commande-user/commande-user.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SigninComponent,
    UsersComponent,
    UpdateUserComponent,
    HomeComponent,
    MenuComponent,
    AcceuilComponent,
    PlatsComponent,
    AddPlatComponent,
    UpdatePlatComponent,
    ImageUploadComponent,
    PlatComponent,
    PanierComponent,
    CommandesComponent,
    AuthButtonComponent,
    CommandeUserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
