import { Injectable } from '@angular/core';
import { SearchModel } from './models/SearchModel';
import { Observable } from 'rxjs';
import { HttpParams, HttpHeaders, HttpClient } from '@angular/common/http';
import { FindModel } from './models/FindModel';

@Injectable({
  providedIn: 'root'
})
export class SearchServiceService {

  constructor(private http: HttpClient) { }
  find(obj: SearchModel) {
    let result: Observable<Array<FindModel>>;
    let params = new HttpParams()
      .set('query', JSON.stringify(obj));
    let token = JSON.parse(localStorage.getItem("currentUser"));
    let options = { headers: new HttpHeaders().set("Authorization", "Bearer " + token.token.access_token), params: params };
    result = this.http.get<Array<FindModel>>("https://localhost:44340/api/Search", options);
    return result;
  }
  search(obj: SearchModel) {
    let result: Observable<Array<FindModel>>;
    let token = JSON.parse(localStorage.getItem("currentUser"));
    let options = { headers: new HttpHeaders().set("Authorization", "Bearer " + token.token.access_token)};
    result = this.http.post<Array<FindModel>>("https://localhost:44340/api/Search",obj,options);
    return result;
  }
}
