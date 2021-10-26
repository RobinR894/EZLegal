import { Component } from '@angular/core';
import { UserService} from './user.service';
import {NgbRatingConfig} from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //templateUrl: 'admin/admin.html',
  providers: [NgbRatingConfig], // add NgbRatingConfig to the component providers
  styleUrls: ['./BG.css']
})

export class AppComponent {
  //data:any;
 forum:any[];
  title = 'EZLEGAL';

    constructor(private UserService: UserService, private http: HttpClient) { }
    ngOnInit() {
     // this.getForums();
    }
   /* getForums() {
      this.UserService.getForums()
        .subscribe(data => {
          console.log(data);
          this.forum=data.forumList;
        });
    }*/
 
}
