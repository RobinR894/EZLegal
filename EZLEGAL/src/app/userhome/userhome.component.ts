import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import * as $ from 'jquery';
import { Router } from '@angular/router';
import { UserService } from '../user.service';


@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['../BG.css'],
  styles:['a:hover {color: red;}']
})
export class UserhomeComponent implements OnInit {
  userDisplayType = this.cookieService.get('role') ;
  constructor(private router:Router, private cookieService: CookieService) { }

  ngOnInit(): void {
    if(this.cookieService.get('role') != "user")
    {
      this.router.navigate(['/login']);
      this.cookieService.deleteAll();
    }
    //alert(this.cookieService.get('role'));
  }
    deletecookies(){
      this.cookieService.deleteAll();
      this.router.navigate(['/home']);
    }
}
