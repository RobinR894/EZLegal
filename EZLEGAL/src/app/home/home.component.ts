import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrls: ['../BG.css'],
  styles:['td{border:none;}']
})
export class HomeComponent implements OnInit {
  slides = [
    {img: "/assets/img/HOME1.jpg"},
    {img: "/assets/img/HOME2.jpg"},
    {img: "/assets/img/HOME3.jpg"},
    {img: "/assets/img/HOME4.jpg"},
    {img: "/assets/img/HOME5.jpg"}
  ];
  slideConfig = {"slidesToShow": 1, 
  "slidesToScroll": 1,
   "autoplay": true,
    "autoplayspeed":1500};
  
  slickInit(e:any) {
    console.log('slick initialized');
  }
  
  breakpoint(e:any) {
    console.log('breakpoint');
  }
  
  afterChange(e:any) {
    console.log('afterChange');
  }
  
  beforeChange(e:any) {
    console.log('beforeChange');
  }  

  constructor() { }

  ngOnInit(): void {
  }
  testing(){
    var name = $("#txtName").val();
    alert(name);

  }
  
}
