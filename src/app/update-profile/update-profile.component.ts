import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { UpdateProfileModel } from '../models/UpdateProfileModel';
import { UserService } from '../user.service';
import { ProfileModel } from '../models/ProfileModel';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css'],

})
export class UpdateProfileComponent implements OnInit {

  constructor(private router: Router, private userService: UserService, private route: ActivatedRoute,private fb:FormBuilder,private calll:ChangeDetectorRef) {

   }
  updateUser:any;
  updateForm: FormGroup;
  ngOnInit() {
    this.route.data.subscribe(data => {
      this.updateUser = data.updateprofile;
      this.updateForm=this.fb.group(
        {
          BirthDate: new Date(data.updateprofile.birthDate),
          FirstName:data.updateprofile.firstName,
          Gender: data.updateprofile.gender,
          Interests:data.updateprofile.interests,
          IsAnonumous:data.updateprofile.isAnonymous,
          LastName: data.updateprofile.lastName,
          MeetGoal: data.updateprofile.meetGoal,
          Other: data.updateprofile.other,
        }
      );
    })

  }


  onSubmit() {
    let obj = new UpdateProfileModel();
    obj.Id = this.updateUser.id;
    obj.BirthDate = this.updateForm.controls['BirthDate'].value;
    console.log(obj.BirthDate);
    obj.FirstName = this.updateForm.controls['FirstName'].value;
    obj.Gender = this.updateForm.controls['Gender'].value;
    obj.Interests = this.updateForm.controls['Interests'].value;
    obj.LastName = this.updateForm.controls['LastName'].value;
    obj.MeetGoal = this.updateForm.controls['MeetGoal'].value;
    obj.Other = this.updateForm.controls['Other'].value;
    obj.IsAnonymous = this.updateForm.controls['IsAnonumous'].value;
    console.log(obj);
    this.userService.updateProfile(obj).subscribe(data => {
      this.router.navigate([""]);
    });
  }
}
