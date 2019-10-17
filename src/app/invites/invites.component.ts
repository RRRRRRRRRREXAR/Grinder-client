import { InviteModel } from './../models/InviteModel';
import { Component, OnInit } from '@angular/core';
import { FriendsService } from '../friends.service';

@Component({
  selector: 'app-invites',
  templateUrl: './invites.component.html',
  styleUrls: ['./invites.component.css']
})
export class InvitesComponent implements OnInit {

  constructor(private friendsService: FriendsService) { }
  invites: any;
  ngOnInit() {
    this.friendsService.getInvites().subscribe(data => {
      this.invites = data;
    })
  }
  Accept(id:string){
    console.log(this.invites[id]);
    this.friendsService.acceptInvite(this.invites[id]).subscribe();
  }
  Decline(id:string){
    this.friendsService.declineInvite(this.invites[id]).subscribe();
  }
  Block(id:string){
    this.friendsService.block(this.invites[id]).subscribe();
  }
}
