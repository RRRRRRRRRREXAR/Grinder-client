import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { UpdateProfileModel } from '../models/UpdateProfileModel';
import { UserService } from '../user.service';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent implements OnInit {

  constructor(private router:Router,private userService:UserService) { }
  updateForm = new FormGroup({
    Email:new FormControl(''),
    FirstName:new FormControl(''),
    LastName:new FormControl(''),
    BirthDate:new FormControl(''),
    Gender:new FormControl(''),
    MeetGoal:new FormControl(''),
    Other:new FormControl(''),
    Interests:new FormControl('')
  })
  ngOnInit() {
  }
  onSubmit(){
    let obj = new UpdateProfileModel();
    obj.BirthDate=this.updateForm.get('BirthDate').value;
    obj.FirstName=this.updateForm.get('FirstName').value;
    obj.Gender=this.updateForm.get('Gender').value;
    obj.Interests=this.updateForm.get('Interests').value;
    obj.LastName=this.updateForm.get('LastName').value;
    obj.MeetGoal=this.updateForm.get('MeetGoal').value;
    obj.Other=this.updateForm.get('Other').value;
    obj.IsAnonymous=this.updateForm.get('IsAnonumous').value;
    this.userService.updateProfile(obj).subscribe(data=>{
      this.router.navigate([""]);
    });
  }
}
