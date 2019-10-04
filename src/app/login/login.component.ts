import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { LoginModel } from '../models/LoginModel';
import { AuthorizeService } from '../authorize.service';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authorizeService:AuthorizeService,private dataService:DataService,private router:Router) { }

  ngOnInit() {
  }
  loginForm = new FormGroup({
    Email:new FormControl(''),
    Password:new FormControl('')
  })
  onSubmit(){
    let obj = new LoginModel();
    obj.username=this.loginForm.get('Email').value;
    obj.password=this.loginForm.get('Password').value;
    this.authorizeService.login(obj).subscribe(data=>
      {
        localStorage.setItem('currentUser',JSON.stringify({token:data}));
        this.dataService.isUserLoggedIn.next(true);
        this.router.navigate([""]);
      });
  }
}
