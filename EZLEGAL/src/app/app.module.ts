import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { SlickCarouselModule } from 'ngx-slick-carousel'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArrayOfComponents } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { FilterPipe } from './filter.pipe';
import { HttpClientModule} from '@angular/common/http';
import { AdminusermanageComponent } from './adminusermanage/adminusermanage.component';
import { AdpostComponent } from './adpost/adpost.component';
import { AdnewtopicComponent } from './adnewtopic/adnewtopic.component';
import { AdmininboxComponent } from './admininbox/admininbox.component';
import { AdmininboxnmComponent } from './admininboxnm/admininboxnm.component';
import { AdminmessageComponent } from './adminmessage/adminmessage.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import { UserService } from './user.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { LawyerhomeComponent } from './lawyerhome/lawyerhome.component';
import { UserhomeComponent } from './userhome/userhome.component';

@NgModule({
  declarations: [
    AppComponent,
    ArrayOfComponents,
    HomeComponent,
    SignupComponent,
    LoginComponent,
    AdminComponent,
    FilterPipe,
    AdminusermanageComponent,
    AdpostComponent,
    AdnewtopicComponent,
    AdmininboxComponent,
    AdmininboxnmComponent,
    AdminmessageComponent,
    LawyerhomeComponent,
    UserhomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SlickCarouselModule,
    HttpClientModule,
    NgbModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
