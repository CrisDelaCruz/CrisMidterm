import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  contacts= [
    
    {'id':1,'name':'Facebook Account','description':'Username:maria cris dela cruz',},
    {'id':2,'name': 'Gmail Account','description':'Email:xanderoledan02@gmail.com'},
    {'id':3,'name': 'Call','description':'Number:09354311365'},
    {'id':4,'name': 'Instagram','description':'watchme29'},
  ]
}
