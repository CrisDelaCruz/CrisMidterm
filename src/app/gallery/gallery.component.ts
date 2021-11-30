import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  gallery=[
    {'id':1,'image':'../../assets/image.jpg'},
    {'id':2,'image':'../../assets/image1.jpg'},
    {'id':3,'image':'../../assets/image2.JPG'},
    {'id':4,'image':'../../assets/image3.jpg'},
   
  ]
}
