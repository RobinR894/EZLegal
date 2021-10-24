import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent} from './home/home.component';
import { AboutComponent} from './about/about.component';
import { ContactComponent} from './contact/contact.component';
import { SignupComponent} from './signup/signup.component';
import { LoginComponent} from './login/login.component';
import { AdminComponent} from './admin/admin.component';
import { AdminsearchComponent} from './adminsearch/adminsearch.component';
import { AdpostComponent} from './adpost/adpost.component';
import { AdnewtopicComponent} from './adnewtopic/adnewtopic.component';
import { AdmininboxComponent} from './admininbox/admininbox.component';
import { AdmininboxnmComponent} from './admininboxnm/admininboxnm.component';
import { AdminmessageComponent} from './adminmessage/adminmessage.component';
import { TestComponent} from './test/test.component';
import { LawyerhomeComponent } from './lawyerhome/lawyerhome.component';
import { UserhomeComponent } from './userhome/userhome.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path:'home', component:HomeComponent},
  {path:'about', component:AboutComponent},
  {path:'contact', component:ContactComponent},
  {path:'signup', component:SignupComponent},
  {path:'login', component:LoginComponent},
  {path:'admin', component:AdminComponent},
  {path:'adminsearch', component:AdminsearchComponent},
  {path:'adpost', component:AdpostComponent},
  {path:'adnewtopic', component:AdnewtopicComponent},
  {path:'admininbox', component:AdmininboxComponent},
  {path:'admininboxnm', component:AdmininboxnmComponent},
  {path:'adminmessage', component:AdminmessageComponent},
  {path:'test', component:TestComponent},
  {path:'lawyerhome',component:LawyerhomeComponent},
  {path:'userhome',component:UserhomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const ArrayOfComponents = [HomeComponent,AboutComponent,ContactComponent,SignupComponent,LoginComponent,AdminComponent,AdminsearchComponent,
  AdpostComponent,AdnewtopicComponent,AdmininboxComponent,AdmininboxnmComponent,AdminmessageComponent,TestComponent,LawyerhomeComponent,UserhomeComponent]
