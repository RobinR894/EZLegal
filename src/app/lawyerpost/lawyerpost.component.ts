import { Component, OnInit } from '@angular/core';
import { ForumService } from '../forum.service';
import { NgForm } from '@angular/forms';
import { Topic } from '../topic.mode';
import { Post } from '../post.model';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { ToastrService } from 'ngx-toastr';
import { HttpHeaders } from '@angular/common/http';
import * as globalHeader from '../login/login.component';

@Component({
  selector: 'app-lawyerpost',
  templateUrl: './lawyerpost.component.html',
  styleUrls: ['../BG.css'],
  styles: [`
  .star {
    position: relative;
    display: inline-block;
    font-size: 3rem;
    color: #d3d3d3;
  }
  .full {
    color: red;
  }
  .half {
    position: absolute;
    display: inline-block;
    overflow: hidden;
    color: red;
  }
  `]
})
export class LawyerpostComponent implements OnInit {
  userDisplayType = this.cookieService.get('role') ;
  usersessionId = this.cookieService.get('sessionId') ;
  topic: Topic;
  post: Post;
  posts: Post[];
  page: number = 1;
  pages: number[];
  
  constructor(private toastr: ToastrService,private ForumService: ForumService,private router:Router, private cookieService: CookieService,private UserService: UserService) { }

  ngOnInit(): void {
    this.loadTopic();
    this.resetForm();
    if(this.cookieService.get('role') != "lawyer")
    {
      this.router.navigate(['/login']);
      this.cookieService.deleteAll();
    }
   
    //alert(this.cookieService.get('role'));
  
  }
  showup():void {
    window.scroll(0,0);
  }
  private resetForm(form?:NgForm) {
    if(form!=null)
      form.reset();
    this.topic={
      post:[]
    };
    this.post={forumId:0, postRating: 0, userRating: 0};
  }

   private loadTopic() {
    this.ForumService.getTopic(this.ForumService.forumId).subscribe((data:any)=>{
      this.topic = data;
      // on load only render page 1
      this.posts = data.post.slice(0,10);
      this.populatePages(Math.floor((data.post.length/ 10) + 1))
    });
  }

  private populatePages(total: number) {
    this.pages = Array(total).fill(0).map((x,i)=>i);
  }

   replyTopic(form:NgForm) {
    const body = {"forumId": this.ForumService.forumId, "content": form.value.comment};
    this.ForumService.createPost(body).subscribe((data:any) => {
      if (data.postId != null && data.postId != undefined) {
        this.router.navigate(['/lawyerhome']);
        this.toastr.success("Post created successfully");
      } else {
        this.toastr.error("Oops, we ran into an error");
      }
    });
    this.ForumService.getTopic(this.ForumService.forumId).subscribe((data:any)=>{
      this.topic = data;
      this.getPage(this.page);
    });
  }

  getPage(page: number) {
    this.page = page;
    if (typeof this.topic.post != "undefined") {
      this.posts = this.topic.post.slice(page * 10 ,(page + 1) * 10);
    }
  }
  
  deletecookies(){
    this.cookieService.deleteAll();
    this.router.navigate(['/home']);
  }
  
}