import { Component, OnInit } from '@angular/core';
import { AuthorizeService } from '../authorize.service';
import { DataService } from '../data.service';
import { UserModel } from '../models/UserModel';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  isUserLoggedIn:boolean;
  currentUser:any;
  constructor(private authorizeService:AuthorizeService,private dataService:DataService) { 
    this.dataService.isUserLoggedIn.subscribe(value=>{
      this.isUserLoggedIn=value;
      this.currentUser=JSON.parse(localStorage.getItem('currentUser'));
    });
  }

  ngOnInit() {
  }
  onLogout(){
    this.authorizeService.logout();
  }
}
