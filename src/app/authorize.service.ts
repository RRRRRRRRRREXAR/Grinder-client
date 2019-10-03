import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorizeService {
  public API='https://localhost:44340/api/Account';
  constructor() { }
}
