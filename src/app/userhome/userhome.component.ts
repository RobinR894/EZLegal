import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import * as $ from 'jquery';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { ForumService } from '../forum.service';
import { HttpHeaders } from '@angular/common/http';

var httpOptions = {
  headers: new HttpHeaders({
  'Content-Type':  'application/json',
  'sessionId': '{{usersessionId}}'
  })
};

@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['../BG.css'],
  styles:['a:hover {color: red;}']
})
export class UserhomeComponent implements OnInit {
  userDisplayType = this.cookieService.get('role') ;
  usersessionId = this.cookieService.get('sessionId') ;
  forum:any[];
  title = 'EZLEGAL';
  page: number = 1;
  pages: number[];
  count:Number = 2;
  topics: any[];
  constructor(private router:Router, private cookieService: CookieService,private UserService: UserService,private ForumService: ForumService) { }

  ngOnInit(): void {
    this.getForums();
    if(this.cookieService.get('role') != "user")
    {
      this.router.navigate(['/login']);
      this.cookieService.deleteAll();
    }
    this.usersessionId = this.cookieService.get('sessionId') ;
    console.log('userhome session id' + this.usersessionId);
    //alert(this.cookieService.get('role'));
    httpOptions = {
      headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'sessionId': this.cookieService.get('sessionId')
      })
    };
  }
  showup():void {
    window.scroll(0,0);
  }
  getForums() {
    this.UserService.getForums()
    .subscribe(data => {
      console.log(data);
      this.forum=data.forumList;
      this.topics = data.forumList.slice(0,10);
      this.populatePages(Math.floor((data.forumList.length/ 10) + 1));
    });
  }
  private populatePages(total: number) {
    this.pages = Array(total).fill(0).map((x,i)=>i);
  }
  getPage(page: number) {
    this.page = page;
    if (typeof this.forum != "undefined") {
      this.topics = this.forum.slice(page * 10 ,(page + 1) * 10);
    }
  }
    deletecookies(){
      this.cookieService.deleteAll();
      this.router.navigate(['/home']);
    }
    handleClick(forumId: number) {
      this.ForumService.forumId = forumId;
    }
}
