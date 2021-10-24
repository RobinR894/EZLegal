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
    subscribe((data:any)=>{
      if(data.Succeeded == true){
        this.resetForm(form);
        this.toastr.success('User registration successful');
      }
      else
      this.toastr.error(data.Errors[0]);
  
    });
  }
regSubmit(form:NgForm){
 
  this.UserService.registerUser(form.value).
  subscribe((data:any)=>{
   // this.resetForm(form);
   // this.toastr.success('User registration successful');
    if(this.user.email = data.email){
      this.resetForm(form);
      this.toastr.success('User registration successful');
    }
    else
    this.toastr.error(data.Errors[0]);

  });
}
}
