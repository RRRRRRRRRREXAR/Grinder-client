import { Component, OnInit } from '@angular/core';
import { FriendsService } from '../friends.service';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {

  constructor(private friendService: FriendsService) { }
  friends: any;
  ngOnInit() {
    this.friendService.getFriends().subscribe(data => {
      this.friends = data;
    });
  }
  Block(id: string) {
    this.friendService.block(this.friends[id]).subscribe();
  }
}
