import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { UpdateProfileModel } from '../models/UpdateProfileModel';
import { UserService } from '../user.service';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent implements OnInit {

  constructor(private router: Router, private userService: UserService, private route: ActivatedRoute) { }
  updateUser: UpdateProfileModel;
  updateForm = new FormGroup({
    FirstName: new FormControl(),
    LastName: new FormControl(),
    BirthDate: new FormControl(),
    Gender: new FormControl(),
    MeetGoal: new FormControl(),
    Other: new FormControl(),
    Interests: new FormControl(),
    IsAnonumous: new FormControl()
  })
  ngOnInit() {
    this.route.data.subscribe((data: { profile: UpdateProfileModel }) => {
      this.updateUser = data.profile;
      console.log(this.updateUser);
      this.updateForm.get('BirthDate').setValue(data.profile.BirthDate);
      this.updateForm.get('FirstName').setValue(data.profile.FirstName);
      this.updateForm.get('Gender').setValue(data.profile.Gender);
      this.updateForm.get('Interests').setValue(data.profile.Interests);
      this.updateForm.get('LastName').setValue(data.profile.LastName);
      this.updateForm.get('MeetGoal').setValue(data.profile.MeetGoal);
      this.updateForm.get('Other').setValue(data.profile.Other);
      this.updateForm.get('IsAnonumous').setValue(data.profile.IsAnonymous);
    })
  }
  onSubmit() {
    let obj = new UpdateProfileModel();
    obj.Id = this.updateUser.Id;
    obj.BirthDate = this.updateForm.get('BirthDate').value;
    obj.FirstName = this.updateForm.get('FirstName').value;
    obj.Gender = this.updateForm.get('Gender').value;
    obj.Interests = this.updateForm.get('Interests').value;
    obj.LastName = this.updateForm.get('LastName').value;
    obj.MeetGoal = this.updateForm.get('MeetGoal').value;
    obj.Other = this.updateForm.get('Other').value;
    obj.IsAnonymous = this.updateForm.get('IsAnonumous').value;
    this.userService.updateProfile(obj).subscribe(data => {
      this.router.navigate([""]);
    });
  }
}
