import { Component, OnInit } from '@angular/core';
import { ForumService } from '../forum.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Topic } from '../topic.mode';
import { Post } from '../post.model';
import { HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import * as globalHeader from '../login/login.component';


@Component({
  selector: 'app-usertopic',
  templateUrl: './usertopic.component.html',
  styleUrls: ['../BG.css'],
  styles:['a:hover {color: red;}']

})
export class UsertopicComponent implements OnInit {
  userDisplayType = this.cookieService.get('role') ;
  usersessionId = this.cookieService.get('sessionId') ;
  topic:Topic;
  post:Post;

  constructor(
    private router:Router, 
    private cookieService: CookieService,
    private UserService: UserService,
    private ForumService: ForumService,
    private toastr: ToastrService
    ) {}

  ngOnInit(): void {
    this.resetForm();
    if(this.cookieService.get('role') != "user")
    {
      this.router.navigate(['/login']);
      this.cookieService.deleteAll();
    }
   
    //alert(this.cookieService.get('role'));
   
  }

  private resetForm(form?:NgForm){
    if(form!=null)
      form.reset();
    this.topic={};
    this.post={forumId:0, postRating: 0, userRating: 0};
  }

  async createTopic(form:NgForm){
    this.ForumService.createTopic(form.value).
    subscribe((data:any)=>{
      if (data.forumId != null && data.forumId != undefined) {
        this.createPost(data.forumId, form.value.comment);
        this.resetForm(form);
        // this.toastr.success("Topic created successfully");
      } else {
        this.toastr.error("Oops, we ran into an error");
        return;
      }
    });
    
  }

  private createPost(forumId:number, content:string){
    const body = {"forumId": forumId, "content": content};
    console.log(body);
    this.ForumService.createPost(body).subscribe((data:any)=>{
      if (data.postId != null && data.postId != undefined) {
        // this.resetForm(form);
        this.toastr.success("Topic created successfully");
        this.router.navigate(['/userhome']);
      } else {
        this.toastr.error("Oops, we ran into an error");
      }
    });
  }
  deletecookies(){
    this.cookieService.deleteAll();
    this.router.navigate(['/home']);
  }
}
