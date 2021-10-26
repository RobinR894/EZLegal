import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../user.service';
import { ForumService } from '../forum.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.html',
  styleUrls: ['../BG.css'],
  styles:['a:hover {color: red;}']
})
export class AdminComponent implements OnInit {

  forum:any[];
  title = 'EZLEGAL';
  p: Number = 1;
  count:Number = 2;
    constructor(private UserService: UserService, private http: HttpClient, private ForumService: ForumService) { }
    ngOnInit() {
      this.getForums();
    }
    getForums() {
      this.UserService.getForums()
        .subscribe(data => {
          console.log(data);
          this.forum=data.forumList;
        });
    }

    handleClick(forumId: number) {
      console.log(forumId);
      this.ForumService.forumId = forumId;
    }
 
}
