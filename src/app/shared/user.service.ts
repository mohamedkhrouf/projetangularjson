import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../model/user';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
 url = '/api/user';

  constructor(private http: HttpClient) { }

  postUser(user: User): Observable<User>{

    return this.http.post<User>(this.url, user).pipe(
      catchError((err) => {
        console.error(err);
        return throwError(err);
      })
    );
  }
  getAllUsers(): Observable<User[]>{
    return this.http.get<User[]>(this.url).pipe(
      catchError((err) => {
        console.error(err);
        return throwError(err);
      })
    );
  }

  deleteUser(user: User): Observable<User>{
    return this.http.delete<User>(this.url + '/' + user.id).pipe(
      catchError((err) => {
        console.error(err);
        return throwError(err);
      })
    );
  }

  getUserById(id): Observable<User>{
    return this.http.get<User>(this.url + '/' + id).pipe(
      catchError((err) => {
        console.error(err);
        return throwError(err);
      })
    );
  }
  putUser(user: User): Observable<User>{
    return this.http.put<User>(this.url + '/' + user.id, user).pipe(
      catchError((err) => {
        console.error(err);
        return throwError(err);
      })
    );
  }
  rechercheUser(username): Observable<User[]>{
    return  this.http.get<User[]>(this.url + '?username_like=' + username ).pipe(
      catchError((err) => {
        console.error(err);
        return throwError(err);
      })
    );
}
  rechercheEmail(email): Observable<User[]>{
    return  this.http.get<User[]>(this.url + '?email_like=' + email ).pipe(
      catchError((err) => {
        console.error(err);
        return throwError(err);
      })
    );
  }

  rechercheM(crit): Observable<User[]>{
    return  this.http.get<User[]>(this.url + '?q=' + crit ).pipe(
      catchError((err) => {
        console.error(err);
        return throwError(err);
      })
    );
  }


}
