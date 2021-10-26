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
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  //Minimum six characters, at least one letter and one number:
  passPattern:any ="^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{6,}$";
  namePattern:any = "^[a-zA-Z \-\']{2,}$";
  reg:any = {};
  reglwy:any = {};
  // smartphone: any = [];
  headers: any;
  spresp: any;
  postdata: any;

  constructor(private UserService: UserService, private router:Router, private toastr: ToastrService) {}
  showSuccess() {
    this.toastr.success('Hello world!', 'Toastr fun!');}
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
    this.UserService.registerLawyerUser(form.value).
    subscribe((data:any)=>{this.resetForm(form);
      this.toastr.success('User registration successful');
      if(data.Succeeded == true){
        this.resetForm(form);
        this.toastr.success('User registration successful');
      }
      else
      this.toastr.error(data.Errors[0]);
  
    });
  }
  test():void {
    alert("hr");
  }
regSubmit(form:NgForm){
 /* if(this.user.email == reg.email){
  this.UserService.registerUser(form.value).subscribe((data:any)=>{
  console.log(data);
  if(data.exist == "Y")
  {
    alert("Y")
  }
  else if (data.exist == "N") {
    alert("N")
  }
})}*/
  this.UserService.registerUser(form.value).
  subscribe((data:any)=>{
   this.resetForm(form);
   this.toastr.success('User registration successful');
    if(this.user.email == data.email){
      this.resetForm(form);
      this.toastr.success('User registration failed');
      alert('no')
    }
    else
    this.toastr.error(data.Errors[0]);});
}
}
