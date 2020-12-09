import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {Commande} from '../model/commande';
import {User} from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class CommandeService {
  url = '/api/commande';

  constructor(private http: HttpClient) {
  }

  postCommande(commande: Commande): Observable<Commande> {

    return this.http.post<Commande>(this.url, commande).pipe(
      catchError((err) => {
        console.log(err);
        console.error(err);
        return throwError(err);
      })
    );
  }

  getAllCommandes(): Observable<Commande[]> {
    return this.http.get<Commande[]>(this.url).pipe(
      catchError((err) => {
        console.error(err);
        return throwError(err);
      })
    );
  }

  deleteCommande(commande: Commande): Observable<Commande> {
    return this.http.delete<Commande>(this.url + '/' + commande.id).pipe(
      catchError((err) => {
        console.error(err);
        return throwError(err);
      })
    );
  }

  getCommandeById(id): Observable<Commande> {
    return this.http.get<Commande>(this.url + '/' + id).pipe(
      catchError((err) => {
        console.error(err);
        return throwError(err);
      })
    );
  }

  putCommande(commande: Commande): Observable<Commande> {
    return this.http.put<Commande>(this.url + '/' + commande.id, commande).pipe(
      catchError((err) => {
        console.error(err);
        return throwError(err);
      })
    );
  }

  rechercheC(id): Observable<Commande[]>{
    return  this.http.get<Commande[]>(this.url + '?user?id=' + id ).pipe(
      catchError((err) => {
        console.error(err);
        return throwError(err);
      })
    );
  }
}
