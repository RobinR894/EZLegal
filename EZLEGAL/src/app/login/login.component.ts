import { Component, OnInit } from '@angular/core';
import {catchError, retry} from 'rxjs/internal/operators';
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.html',
  styleUrls: ['../style.css']
})
export class LoginComponent implements OnInit {
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";

  forum: any = [];
  login: any = {};
  // smartphone: any = [];
  headers: any;
  spresp: any;
  postdata: any;
  
  constructor(private UserService: UserService, private router:Router, private cookieService: CookieService) {}

  ngOnInit() {
    this.getForums();
  }
  
  getForums() {
    this.UserService.getForums()
      .subscribe(data => {
        console.log(data);
      });
  }
loginSubmit(data:any)
{ 
 

  if((this.login.email = data.emailid) && (this.login.password = data.passwd))
  {
  this.UserService.loginSubmit(this.login).subscribe(data=>{
    console.log(data);
    if(data.role == "lawyer"){
      this.router.navigate(['/lawyerhome']);
      this.cookieService.set( 'role', data.role,0.0517);
      this.cookieService.set( 'sessionId', data.sessionId);  // To Set Cookie
      }
      else if(data.role == "user"){ this.router.navigate(['/userhome']);
      this.cookieService.set( 'role', data.role, 0.0517); // To Set Cookie and timer, 0.25=6hours ,1 = 24 hours, 2min=2/1440
      }
      
  })}
  
  
 else if((this.login.email = data.emailid) && (this.login.password =! data.passwd))
  {
    
      this.router.navigate(['/login']);
      alert("Email or password is not correct, please try again");
      location.reload();
    }
  else{
    this.UserService.loginSubmit(this.login).subscribe(data=>{
      if(data.status == 500 ){ 
        console.log(data)
        alert("Email or password is not correct, please try again");
        location.reload();}
        else{
      console.log(data);
    this.router.navigate(['/login']);
    alert("Email or password is not correct, please try again");
    location.reload();
   } })}
}
}
