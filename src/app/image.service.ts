import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private http: HttpClient) { }

  public uploadImage(image: File): Observable<any> {
    let token = JSON.parse(localStorage.getItem("currentUser"));
    let options = { headers: new HttpHeaders().set("Authorization", "Bearer " + token.token.access_token) };
    const formData = new FormData();
    formData.append('image', image);
    return this.http.post("https://localhost:44340/api/Image", formData, options);
  }
  public uploadProfileImage(image:File):Observable<any>{
    let token = JSON.parse(localStorage.getItem("currentUser"));
    let options = { headers: new HttpHeaders().set("Authorization", "Bearer " + token.token.access_token) };
    const formData = new FormData();
    formData.append('image', image);
    return this.http.post("https://localhost:44340/uploadprofilepicture", formData, options);
  }

  public getImages(){
    let token = JSON.parse(localStorage.getItem("currentUser"));
    let options = { headers: new HttpHeaders().set("Authorization", "Bearer " + token.token.access_token) };
    return this.http.get("https://localhost:44340/api/Image", options);
  }
}

