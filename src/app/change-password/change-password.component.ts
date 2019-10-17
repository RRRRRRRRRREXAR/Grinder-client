import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from '../user.service';
import { ChangePasswordModel } from '../models/СhangePasswordModel';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  constructor(private fb:FormBuilder,private userService:UserService,private router:Router,private data:DataService) { }
  changePassword:FormGroup;
  ngOnInit() {
    this.changePassword=this.fb.group(
      {
        OldPassword:"",
        NewPassword:""
      }
    )
  }
  onSubmit(){
    let obj = new ChangePasswordModel();
    obj.oldPassword=this.changePassword.get("OldPassword").value;
    obj.newPassword=this.changePassword.get("NewPassword").value;
    this.userService.changePassword(obj).subscribe(data=>{
    this.data.isUserLoggedIn.next(false);
    localStorage.removeItem("currentUser");
    this.router.navigate([""]);
    });
  }
}
