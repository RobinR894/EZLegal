import { Component, OnInit } from '@angular/core';
import { ForumService } from '../forum.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Topic } from '../topic.mode';
import { Post } from '../post.model';

@Component({
  selector: 'app-adpost',
  templateUrl: './adpost.component.html',
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
export class AdpostComponent implements OnInit {
  topic: Topic;
  post: Post;
  //used to handle pagination
  posts: Post[];
  page: number = 1;
  pages: number[];

  currentRating = 4;
  constructor(
    private ForumService: ForumService,
    private toastr: ToastrService
    ) { }

  ngOnInit(): void {
    this.loadTopic();
    this.resetForm();
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
    console.log(total);
    this.pages = Array(total).fill(0).map((x,i)=>i);
  }
  replyTopic(form:NgForm) {
    const body = {"forumId": this.ForumService.forumId, "content": form.value.comment};
    this.ForumService.createPost(body).subscribe((data:any) => {
      if (data.postId != null && data.postId != undefined) {
        // this.resetForm(form);
        this.toastr.success("Post created successfully");
      } else {
        this.toastr.error("Oops, we ran into an error");
      }
    });
    this.ForumService.getTopic(this.ForumService.forumId).subscribe((data:any)=>{
      this.topic = data;
    });
  }

  getPage(page: number) {
    if (typeof this.topic.post != "undefined") {
      this.posts = this.topic.post.slice(page * 10 ,(page +1 ) * 10);
    }
}
}