import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {Plat} from '../model/plat';

@Injectable({
  providedIn: 'root'
})
export class PlatService {
  url = '/api/plat';
  constructor(private http: HttpClient) { }

  postPlat(plat: Plat): Observable<Plat>{

    return this.http.post<Plat>(this.url, plat).pipe(
      catchError((err) => {
        console.error(err);
        return throwError(err);
      })
    );
  }
  getAllPlats(): Observable<Plat[]>{
    return this.http.get<Plat[]>(this.url).pipe(
      catchError((err) => {
        console.error(err);
        return throwError(err);
      })
    );
  }

  deletePlat(plat: Plat): Observable<Plat>{
    return this.http.delete<Plat>(this.url + '/' + plat.id).pipe(
      catchError((err) => {
        console.error(err);
        return throwError(err);
      })
    );
  }

  getPlatById(id): Observable<Plat>{
    return this.http.get<Plat>(this.url + '/' + id).pipe(
      catchError((err) => {
        console.error(err);
        return throwError(err);
      })
    );
  }
  putPlat(plat: Plat): Observable<Plat>{
    return this.http.put<Plat>(this.url + '/' + plat.id, plat).pipe(
      catchError((err) => {
        console.error(err);
        return throwError(err);
      })
    );
  }


}
