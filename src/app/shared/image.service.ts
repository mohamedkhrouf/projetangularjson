import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private http: HttpClient) {}


  public uploadImage(image: File): Observable<Response> {
    const formData = new FormData();

    formData.append('image', image);

    // @ts-ignore
    return this.http.post('/api/v1/image-upload', formData);
  }
}
