import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ProfileModel } from './models/ProfileModel';
import { FriendsModel } from './models/FriendsModel';

@Injectable({
  providedIn: 'root'
})
export class FriendsService {

  constructor(private http: HttpClient) { }
  sendInvite(profile: ProfileModel) {
    let token = JSON.parse(localStorage.getItem("currentUser"));
    let options = { headers: new HttpHeaders().set("Authorization", "Bearer " + token.token.access_token) };
    return this.http.post("https://localhost:44340/api/Invites", profile, options);
  }
  declineInvite(friends: FriendsModel) {
    let token = JSON.parse(localStorage.getItem("currentUser"));
    let options = { headers: new HttpHeaders().set("Authorization", "Bearer " + token.token.access_token) };
    return this.http.post("https://localhost:44340/declineinvite", friends, options);
  }
  acceptInvite(friends: FriendsModel) {
    let token = JSON.parse(localStorage.getItem("currentUser"));
    let options = { headers: new HttpHeaders().set("Authorization", "Bearer " + token.token.access_token) };
    return this.http.post("https://localhost:44340/acceptinvite", friends, options);
  }
  block(friend: ProfileModel) {
    let token = JSON.parse(localStorage.getItem("currentUser"));
    let options = { headers: new HttpHeaders().set("Authorization", "Bearer " + token.token.access_token) };
    return this.http.post("https://localhost:44340/block", friend, options);
  }
  getInvites() {
    let token = JSON.parse(localStorage.getItem("currentUser"));
    let options = { headers: new HttpHeaders().set("Authorization", "Bearer " + token.token.access_token) };
    return this.http.get("https://localhost:44340/api/Invites", options);
  }
  getFriends() {
    let token = JSON.parse(localStorage.getItem("currentUser"));
    let options = { headers: new HttpHeaders().set("Authorization", "Bearer " + token.token.access_token) };
    return this.http.get("https://localhost:44340/api/Friends", options);
  }
}
