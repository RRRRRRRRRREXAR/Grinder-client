import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { ProfileModel } from './models/ProfileModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private http:HttpClient) { }

  getDialogs(){
    let result: Observable<ProfileModel>;
    let token = JSON.parse(localStorage.getItem("currentUser"));
    let options = { headers: new HttpHeaders().set("Authorization", "Bearer " + token.token.access_token) };
    result = this.http.get<ProfileModel>("https://localhost:44340/api/Message", options);
    return result;
  }
  createDialog(){

  }
}
