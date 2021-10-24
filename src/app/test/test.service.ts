import {catchError, retry} from 'rxjs/internal/operators';
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

const apiUrl = 'http://localhost:58083/forum/forum/list';
const loginUrl ='http://localhost:58080/user/user/login';
const httpOptions = {
	  headers: new HttpHeaders({
		'Content-Type':  'application/json',
		'sessionId': 'some value'
	  })
  };

@Injectable({
  providedIn: 'root'
})
export class TestService {
  
  
  
  constructor(private http: HttpClient) { }
  
    getForums(): Observable<any> {
    return this.http.post<any>(apiUrl, "{}", httpOptions)
      .pipe(
        catchError(this.handleError('getForums', "{}"))
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
