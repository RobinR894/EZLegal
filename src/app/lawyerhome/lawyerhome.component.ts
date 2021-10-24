import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import * as $ from 'jquery';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-lawyerhome',
  templateUrl: './lawyerhome.component.html',
  styleUrls: ['../BG.css'],
  styles:['a:hover {color: red;}']
})
export class LawyerhomeComponent implements OnInit {
userDisplayType = this.cookieService.get('role') ;
usersessionId = this.cookieService.get('sessionId') ;
  constructor(private router:Router, private cookieService: CookieService) { }

  ngOnInit(): void {
    if(this.cookieService.get('role') != "lawyer")
    {
      this.router.navigate(['/login']);
      this.cookieService.deleteAll();
    }
    this.usersessionId = this.cookieService.get('sessionId') ;
    //alert(this.cookieService.get('role'));
  }
    
    deletecookies(){
      this.cookieService.deleteAll();
      this.router.navigate(['/home']);
    }
}