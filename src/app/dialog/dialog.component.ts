import { logging } from 'protractor';
import { Component, OnInit } from '@angular/core';
import * as signalR from "@aspnet/signalr";
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  hubConnection: signalR.HubConnection
  messages: any[] = [];
  messageForm: FormGroup;
  token: any;
  recivier:any;
  ngOnInit() {
    this.messageForm = this.fb.group({
      Message: ""
    })
    this.token = JSON.parse(localStorage.getItem("currentUser"));
    const options: signalR.IHttpConnectionOptions = {
      accessTokenFactory: () => {
        return this.token.token.access_token;
      }
    }

    this.hubConnection = new signalR.HubConnectionBuilder()
      .withUrl("https://localhost:44340/hub", options)
      .build();
    this.hubConnection.start()
      .then(() => console.log("coonnecttion started"))
      .catch(err => console.log('error while establishing conntection:('));
    this.hubConnection.on("Recieve", (user: string, message: string) => {
      this.messages.push(user + ":" + message);
    })
  }
  sendMessage() {
    let message = this.messageForm.get("Message").value;
    this.hubConnection.invoke("Send", this.messageForm.get("Message").value,this.token.token.username);
  }
}
