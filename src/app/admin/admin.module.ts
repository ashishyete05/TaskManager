import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { DashboardService } from '../dashboard.service';



@NgModule({
  declarations: [
    DashboardComponent,
    MyProfileComponent,
    ContactComponent,
    AboutComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DashboardComponent,
    MyProfileComponent,
    ContactComponent,
    AboutComponent
  ],
  providers: [DashboardService],
})
export class AdminModule { }
