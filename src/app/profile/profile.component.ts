import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  profile= [
    {'id':1,'name':' PERSONAL INFORMATION','description':'Im MARIA CRIS DELA CRUZ,29 years of age from leyte,leyte'},
    {'id':2,'name':'FAMILY BACKGROUND','description':'Im the third daughter of Mr and Mrs Dela Cruz'},
    {'id':3,'name':'FAVORITE THINGS TO DO','description':'I love travelling.'},
    {'id':4,'name':'THINGS I WANT TO ACHIEVE','description':'I want to become a succesfull business woman someday.'},

  ]
}
