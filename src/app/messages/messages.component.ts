import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  constructor(private messageService: MessageService) { }
  dialogs: any;
  ngOnInit() {
    this.messageService.getDialogs().subscribe(data => {
      this.dialogs = data;
    });
  }
  createDialog() {
    this.messageService.createDialog()
  }
}
