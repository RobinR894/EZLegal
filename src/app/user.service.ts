import {catchError, retry} from 'rxjs/internal/operators';
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { User } from './user.model';
import { CookieService } from 'ngx-cookie-service';
import * as $ from 'jquery';
import { Router } from '@angular/router';
import * as globalHeader from './login/login.component';

const forumlistUrl = 'http://localhost:58083/forum/forum/list';
const loginUrl ='http://localhost:58080/user/user/login';
const regUrl ='http://localhost:58080/user/user/adduser';
const reglwyUrl ='http://localhost:58080/user/user/addlawyer';
const chkregUrl ='http://localhost:58080/user/user/getbyemail';
/*
const forumlistUrl = 'http://ec2-54-254-5-106.ap-southeast-1.compute.amazonaws.com:58083/forum/forum/list';
const loginUrl ='http://ec2-54-254-5-106.ap-southeast-1.compute.amazonaws.com:58080/user/user/login';
const regUrl ='http://ec2-54-254-5-106.ap-southeast-1.compute.amazonaws.com:58080/user/user/adduser';
const reglwyUrl ='http://ec2-54-254-5-106.ap-southeast-1.compute.amazonaws.com:58080/user/user/addlawyer';*/


@Injectable({
  providedIn: 'root'
})
export class UserService {
  readonly regUrl ='http://localhost:58080/user/user/adduser';
  readonly reglwyUrl ='http://localhost:58080/user/user/addlawyer';
  //readonly regUrl ='http://ec2-54-254-5-106.ap-southeast-1.compute.amazonaws.com:58080/user/user/adduser';
  //readonly reglwyUrl ='http://ec2-54-254-5-106.ap-southeast-1.compute.amazonaws.com:58080/user/user/addlawyer';

  constructor(private http: HttpClient,private router:Router, private cookieService: CookieService) { 

  }

    getForums(): Observable<any> {
    return this.http.post<any>(forumlistUrl, "{}", globalHeader.httpOptions)
      .pipe(
        catchError(this.handleError('getForums', "{}"))
      );
  }
  registerUser(user:User)
  {
    const body: User = {
      email: user.email,
      password: user.password,
      firstName:user.firstName,
      lastName:user.lastName
    }
    return this.http.post(this.regUrl ,body);
  }

  registerLawyerUser(user:User)
  {
    const body: User = {
      email: user.email,
      password: user.password,
      firstName:user.firstName,
      lastName:user.lastName
    }
    return this.http.post(this.reglwyUrl ,body);
  }
  reglwySubmit(data:any): Observable<any>{
    return this.http.post<any>(reglwyUrl,data,globalHeader.httpOptions)
    .pipe(
      catchError(this.handleError('reglwySubmit',"()"))
    );
  }

  regSubmit(data:any): Observable<any>{
    return this.http.post<any>(regUrl,data,globalHeader.httpOptions)
    .pipe(
      catchError(this.handleError('regSubmit',"()"))
    );
  }

    loginSubmit(data:any): Observable<any>{
      return this.http.post<any>(loginUrl,data,globalHeader.httpOptions)
      .pipe(
        catchError(this.handleError('loginSubmit',"()"))
      );
    }

    private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }

  private log(message: string) {
    console.log(message);
  }
 
}
