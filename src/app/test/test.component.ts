import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { TestService } from './test.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  title = 'angular-httpclient';

  forum: any = [];
  login: any = [];
  // smartphone: any = [];
  headers: any;
  spresp: any;
  postdata: any;
 content:any;
  constructor(private test: TestService, private router:Router) {}

  ngOnInit() {
    this.getForums();
  }
  
  getForums() {
    this.test.getForums()
      .subscribe(data => {
        console.log(data);
        this.content = data.title;
      });
  }
loginSubmit(data:any)
{
  this.login.email = data.emailid;
  this.login["password"] = data.passwd;

  this.test.loginSubmit(this.login).subscribe(data=>{
    console.log(data);
    this.router.navigateByUrl('../admin');
  })
}
}
