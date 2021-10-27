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

/*const forumlistUrl = 'http://localhost:58083/forum/forum/list';
const loginUrl ='http://localhost:58080/user/user/login';
const regUrl ='http://localhost:58080/user/user/adduser';
const reglwyUrl ='http://localhost:58080/user/user/addlawyer';
const chkregUrl ='http://localhost:58080/user/user/getbyemail';*/

const forumlistUrl = 'https://ec2-54-254-5-106.ap-southeast-1.compute.amazonaws.com:58083/forum/forum/list';
const loginUrl ='https://ec2-54-254-5-106.ap-southeast-1.compute.amazonaws.com:58080/user/user/login';
const regUrl ='https://ec2-54-254-5-106.ap-southeast-1.compute.amazonaws.com:58080/user/user/adduser';
const reglwyUrl ='https://ec2-54-254-5-106.ap-southeast-1.compute.amazonaws.com:58080/user/user/addlawyer';
const chkregUrl ='https://ec2-54-254-5-106.ap-southeast-1.compute.amazonaws.com:58080/user/user/getbyemail';



@Injectable({
  providedIn: 'root'
})
export class UserService {
  //readonly regUrl ='http://localhost:58080/user/user/adduser';
  //readonly chkregUrl ='http://localhost:58080/user/user/getbyemail';
  //readonly reglwyUrl ='http://localhost:58080/user/user/addlawyer';
  readonly regUrl ='https://ec2-54-254-5-106.ap-southeast-1.compute.amazonaws.com:58080/user/user/adduser';
  readonly reglwyUrl ='https://ec2-54-254-5-106.ap-southeast-1.compute.amazonaws.com:58080/user/user/addlawyer';
  readonly chkregUrl ='https://ec2-54-254-5-106.ap-southeast-1.compute.amazonaws.com:58080/user/user/getbyemail';
  constructor(private http: HttpClient,private router:Router, private cookieService: CookieService) { 

  }

    getForums(): Observable<any> {
    return this.http.post<any>(forumlistUrl, "{}", globalHeader.httpOptions)
      .pipe(
        catchError(this.handleError('getForums', 'An error occured while logging in, please try again'))
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
  chkUser(user:User)
  {
    const body: User = {
      email: user.email,
      password: user.password,
      firstName:user.firstName,
      lastName:user.lastName
    }
    return this.http.post(this.chkregUrl ,body);
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
      catchError(this.handleError('reglwySubmit','An error occured while logging in, please try again'))
    );
  }

  regSubmit(data:any): Observable<any>{
   return this.http.post<any>(regUrl,data,globalHeader.httpOptions)
    .pipe(
      catchError(this.handleError('regSubmit','An error occured while logging in, please try again'))
    );
    
  }

  chkreg(data:any): Observable<any>{
     return this.http.post<any>(chkregUrl,data,globalHeader.httpOptions)
     .pipe(
       catchError(this.handleError('chkreg',"()"))
     );
   }

    loginSubmit(data:any): Observable<any>{
      return this.http.post<any>(loginUrl,data,globalHeader.httpOptions)
      .pipe(
        catchError(this.handleError('loginSubmit','An error occured while logging in, please try again'))
      );
    }

    private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      /*console.error(error);
      this.log(`${operation} failed: ${error.message}`);*/
      alert(result);
      return of(error as T);
    };
  }

  private log(message: string) {
    console.log(message);
  }
 
}
