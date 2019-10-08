import { Component, OnInit, Input } from '@angular/core';
import { ProfileModel } from '../models/ProfileModel';
import { UserService } from '../user.service';
import { DataService } from '../data.service';
import { Router, Route, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private userService: UserService, private router: Router, private route: ActivatedRoute) {
  }
  currentProfile: ProfileModel;
  ngOnInit() {
    this.route.data.subscribe((data: { profile: ProfileModel }) => {
      this.currentProfile = data.profile;
    })
  }

}
