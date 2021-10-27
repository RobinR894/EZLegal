import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import {catchError, retry} from 'rxjs/internal/operators';
import { HttpClient, HttpResponse, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { User } from '../user.model';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.html',
  styleUrls: ['../style.css']
})
export class SignupComponent implements OnInit {
  user:User;
  emailPattern = "^[A-Za-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  //Minimum six characters, at least one letter and one number:
  passPattern:any ="^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{6,10}$";
  namePattern:any = "^[a-zA-Z \-\']{2,20}$";
  reg:any = {};
  reglwy:any = {};
  // smartphone: any = [];
  headers: any;
  spresp: any;
  postdata: any;
  email: any = {};
  constructor(private UserService: UserService, private router:Router, private toastr: ToastrService) {}
    
  ngOnInit() {
   this.resetForm();
  }
  resetForm(form?:NgForm){
    if(form!=null)
    form.reset();
    this.user={
      email:'',
      password:'',
      firstName:'',
      lastName:''
    }
  }
  reglwySubmit(form:NgForm){
    this.UserService.chkUser(form.value).
    subscribe((data:any)=>{
      console.log(data)
    if (data.exist=="Y" ) {
      alert("An account is already registered with your email address Please log in")
      this.resetForm(form);
    }
    else{
      this.UserService.registerLawyerUser(form.value).
    subscribe((data:any)=>{
      console.log(data)
      this.resetForm(form);
      this.toastr.success('User registration successful');

    });
    }
    })
    
  }
  
regSubmit(form:NgForm){
  this.UserService.chkUser(form.value).
  subscribe((data:any)=>{
    console.log(data)
  if (data.exist=="Y" ) {
    alert("An account is already registered with your email address Please log in")
    this.resetForm(form);
  }
  else{

    this.UserService.registerUser(form.value).
    subscribe((data:any)=>{
      console.log(data)
     this.resetForm(form);
     this.toastr.success('User registration successful');
    
    });
  }
  });
}

/*chkemail():void {
  var email = $("#email").val();
    alert(email);
    this.UserService.chkUser(this.email).
  subscribe((data:any)=>{
    console.log(data)
    alert(data.exist)
  })
}*/
}
