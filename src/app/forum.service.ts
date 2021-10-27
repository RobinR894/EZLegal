import {catchError, retry} from 'rxjs/internal/operators';
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators'
import { User } from './user.model';
import { Post } from './post.model';
import { Topic } from './topic.mode';
import { ForumTag } from './forum-tag.mode';
import { CookieService } from 'ngx-cookie-service';
import * as $ from 'jquery';
import { Router } from '@angular/router';
import * as globalHeader from './login/login.component';

//const forumUrl = 'http://localhost:58083/forum/'
//const ratingUrl = 'http://localhost:58082/rating/'
const forumUrl = 'https://ec2-54-254-5-106.ap-southeast-1.compute.amazonaws.com:58083/forum/'
const ratingUrl = 'https://ec2-54-254-5-106.ap-southeast-1.compute.amazonaws.com:58082/rating/'


@Injectable({
	providedIn: 'root'
})
export class ForumService {
	public forumId: number;

	constructor(private http: HttpClient,private router:Router, private cookieService: CookieService) { }

	getForums(): Observable<any> {
		return this.http.post<any>(forumUrl + 'forum/list', "{}", globalHeader.httpOptions)
		.pipe(
			catchError(this.handleError('getForums', "{}"))
			);
	}

	createTopic(topic:Topic) {
		const body: Topic = {
			title: topic.title
		}
		return this.http.post(forumUrl + 'forum/add' ,body, globalHeader.httpOptions);
	}

	createPost(post:any) {
		const body:any = {
			forumId: post.forumId,
			content : post.content
		}
		return this.http.post(forumUrl + 'post/add', body, globalHeader.httpOptions)
	}

	getTopic(forumId: number) {
		const body = {
			forumId: forumId
		}
		return this.http.post(forumUrl + 'forum/get', body, globalHeader.httpOptions)
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
