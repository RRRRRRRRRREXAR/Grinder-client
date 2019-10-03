import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { RegistrationModel } from '../models/RegistrationModel';
import { AuthorizeService } from '../authorize.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private authorizeService:AuthorizeService) { }
  registrationForm = new FormGroup({
    Email:new FormControl(''),
    Password:new FormControl(''),
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
    let obj = new RegistrationModel();
    obj.BirthDate=this.registrationForm.get('BirthDate').value;
    obj.Email=this.registrationForm.get('Email').value;
    obj.FirstName=this.registrationForm.get('FirstName').value;
    obj.Gender=this.registrationForm.get('Gender').value;
    obj.Interests=this.registrationForm.get('Interests').value;
    obj.LastName=this.registrationForm.get('LastName').value;
    obj.MeetGoal=this.registrationForm.get('MeetGoal').value;
    obj.Other=this.registrationForm.get('Other').value;
    obj.Password=this.registrationForm.get('Password').value;
    this.authorizeService.register(obj).subscribe();
  }
}
