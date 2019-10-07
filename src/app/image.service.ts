import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private http:HttpClient) { }
  public uploadImages(files:File[]){
    let token = JSON.parse(localStorage.getItem("currentUser"));
    let options = {headers:new HttpHeaders().set("Authorization","Bearer"+token.token.acces_token)};
    const formData = new FormData();
    files.forEach(element => {
      formData.append("file",element);
    });
  }
}

