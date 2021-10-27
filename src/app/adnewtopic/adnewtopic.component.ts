import { Component, OnInit } from '@angular/core';
import { ForumService } from '../forum.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Topic } from '../topic.mode';
import { Post } from '../post.model';

@Component({
  selector: 'app-adnewtopic',
  templateUrl: './adnewtopic.component.html',
  styleUrls: ['../BG.css'],
  styles:['a:hover {color: red;}']
})
export class AdnewtopicComponent implements OnInit {

  topic:Topic;
  post:Post;

  constructor(
    private ForumService: ForumService,
    private toastr: ToastrService
    ) {}

  ngOnInit(): void {
    this.resetForm();
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
      } else {
        this.toastr.error("Oops, we ran into an error");
      }
    });
  }
}
