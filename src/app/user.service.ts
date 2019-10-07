import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UpdateProfileModel } from './models/UpdateProfileModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
  updateProfile(user:UpdateProfileModel){
    let result:Observable<any>;
    result=this.http.post<any>("https://localhost:44340/api/Profile",user);
   return result;
  }
}
