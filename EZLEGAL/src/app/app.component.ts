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
  data:any;

  title = 'EZLEGAL';
  //getdata calling
  
  /*constructor(private user:UsersService) {}
   ngOnInit(){
    this.user.getData().subscribe(result=>
      {
        console.warn("result",result)
        this.data=result
      })
   }*/
   postId:any;

    constructor(private http: HttpClient) { }

    ngOnInit() {
      this.http.post<any>('http://localhost:58080/user/user/getbyemail', { email: "test13455@test.com" }).subscribe(data => {
          this.postId = data.exist;
      })
  }
 
  searchText = '';
  characters = [
    'Ant-Man',
    'Aquaman',
    'Asterix',
    'The Atom',
    'The Avengers',
    'Batgirl',
    'Batman',
    'Batwoman',]
}
