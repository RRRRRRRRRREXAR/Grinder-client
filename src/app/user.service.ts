import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { UpdateProfileModel } from './models/UpdateProfileModel';
import { Observable } from 'rxjs';
import { ProfileModel } from './models/ProfileModel';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  updateProfile(user: UpdateProfileModel) {
    let result: Observable<any>;
    let token = JSON.parse(localStorage.getItem("currentUser"));
    let options = { headers: new HttpHeaders().set("Authorization", "Bearer " + token.token.access_token) };
    result = this.http.post<any>("https://localhost:44340/api/Profile", user, options);
    return result;
  }
  getProfile(Email: string) {
    let result: Observable<ProfileModel>;
    let params = new HttpParams()
      .set('Email', Email);
    let token = JSON.parse(localStorage.getItem("currentUser"));
    let options = { headers: new HttpHeaders().set("Authorization", "Bearer " + token.token.access_token), params: params };
    result = this.http.get<ProfileModel>("https://localhost:44340/api/Profile", options);
    return result;
  }
  getCurrentUser() {
    let result: Observable<ProfileModel>;
    let token = JSON.parse(localStorage.getItem("currentUser"));
    let options = { headers: new HttpHeaders().set("Authorization", "Bearer " + token.token.access_token) };
    result = this.http.get<ProfileModel>("https://localhost:44340/api/Account", options);
    return result;
  }
  changePassword(changePasswordModel){
    let result: Observable<ProfileModel>;
    let token = JSON.parse(localStorage.getItem("currentUser"));
    let options = { headers: new HttpHeaders().set("Authorization", "Bearer " + token.token.access_token) };
    result = this.http.post<ProfileModel>("https://localhost:44340/changepassword",changePasswordModel,options);
    return result;
  }
}
