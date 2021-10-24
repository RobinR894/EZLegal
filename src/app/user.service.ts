import {catchError, retry} from 'rxjs/internal/operators';
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators'
import { User } from './user.model';
import { CookieService } from 'ngx-cookie-service';
import * as $ from 'jquery';
import { Router } from '@angular/router';

const apiUrl = 'http://localhost:58083/forum/forum/list';
const loginUrl ='http://localhost:58080/user/user/login';
const regUrl ='http://localhost:58080/user/user/adduser';
const reglwyUrl ='http://localhost:58080/user/user/addlawyer';

const httpOptions = {
	  headers: new HttpHeaders({
		'Content-Type':  'application/json',
		'sessionId': 'usersessionId'
	  })
  };

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  readonly regUrl ='http://localhost:58080/user/user/adduser';
  readonly reglwyUrl ='http://localhost:58080/user/user/addlawyer';

  constructor(private http: HttpClient,private router:Router, private cookieService: CookieService) { }
  usersessionId = this.cookieService.get('sessionId') ;
    getForums(): Observable<any> {
    return this.http.post<any>(apiUrl, "{}", httpOptions)
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
    return this.http.post<any>(reglwyUrl,data,httpOptions)
    .pipe(
      catchError(this.handleError('reglwySubmit',"()"))
    );
  }

  regSubmit(data:any): Observable<any>{
    return this.http.post<any>(regUrl,data,httpOptions)
    .pipe(
      catchError(this.handleError('regSubmit',"()"))
    );
  }

    loginSubmit(data:any): Observable<any>{
      return this.http.post<any>(loginUrl,data,httpOptions)
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
