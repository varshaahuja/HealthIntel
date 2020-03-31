import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { ForgotPasswordComponent } from '../forgot-password/forgot-password.component';
import { HomePageComponent } from '../home-page/home-page.component';
import { SignupComponent } from '../signup/signup.component';
import { AdminDashboardComponent } from '../admin-dashboard/admin-dashboard.component';
import { UserDashboardComponent } from '../user-dashboard/user-dashboard.component';
import { EventsComponent } from '../events/events.component';
import { UserProfileComponent } from '../user-profile/user-profile.component';
import { EditEventsComponent } from '../edit-events/edit-events.component';
import { ViewInsuranceComponent } from '../view-insurance/view-insurance.component';
import { AddInsuranceComponent } from '../add-insurance/add-insurance.component';
import { ViewEventComponent } from '../view-event/view-event.component';
import { AddEventComponent } from '../add-event/add-event.component';
import { FaqComponent } from '../faq/faq.component';
import { InboxComponent } from '../inbox/inbox.component';
import { PoliciesComponent } from '../policies/policies.component';
import { AboutUsComponent } from '../about-us/about-us.component';
import { QuestionsComponent } from '../questions/questions.component';
import { AppointmentsComponent } from '../appointments/appointments.component';
import { LoginGuard } from '../login.guard';
import { TermsOfUseComponent } from '../terms-of-use/terms-of-use.component';

const routes: Routes = [
  {
    path: "login", component:LoginComponent
  },
  {
    path: "signup", component:SignupComponent
  },
  {
    path:"", component:HomePageComponent, canActivate:[LoginGuard]
  },
  {
    path:"adminDashboard", component:AdminDashboardComponent
  },
  {
    path:"userDashboard", component:UserDashboardComponent
  },

  {
    path:"forgotPassword", component: ForgotPasswordComponent
  },
  {
    path: "events", component: EventsComponent
  },
  {
    path: "addEvent", component: AddEventComponent
  },
  {
    path:"editEvent/:id", component: EditEventsComponent
  },
  {
    path:"viewEvent/:id", component: ViewEventComponent
  },
  {
    path:"profile", component: UserProfileComponent
  },
  {
    path:"profile/:id", component: UserProfileComponent
  },
  {
    path:"viewInsurance", component:ViewInsuranceComponent
  },
  {
    path:"addInsurance", component:AddInsuranceComponent
  },
  {
    path:"faq", component: FaqComponent
  },
  {
    path:"inbox", component: InboxComponent
  },
  {
    path:"policies", component:PoliciesComponent
  },
  {
    path: "aboutus", component:AboutUsComponent
  },
  {
    path:"termsOfUse", component:TermsOfUseComponent
  },
  {
    path:"questions", component:QuestionsComponent
  },
  {
    path:"appointments", component:AppointmentsComponent
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
