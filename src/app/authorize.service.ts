import { Injectable } from '@angular/core';
import { RegistrationModel } from './models/RegistrationModel';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginModel } from './models/LoginModel';
import { UserModel } from './models/UserModel';

@Injectable({
  providedIn: 'root'
})
export class AuthorizeService {
  public API='https://localhost:44340/api/Account';
  constructor(private http:HttpClient) { }
  register(user:RegistrationModel){
    let result:Observable<any>;
    
    result=this.http.post<any>("https://localhost:44340/api/Account",user);
   return result;
  }

  logout(){
    
    localStorage.removeItem("currentUser");
    //this.dataSharingService.isUserLoggedIn.next(false);

  }

  login(user :LoginModel):Observable<UserModel>
  {
    let result:Observable<UserModel>;
    
    let body = `username=${user.username}&password=${user.password}&grant_type=password`;
    let options = {headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')};
    result=this.http.post<UserModel>("https://localhost:44327/Token",body,options);
    return result;
  }
}
