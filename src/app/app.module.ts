import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { QuestionsComponent } from './questions/questions.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SignupComponent } from './signup/signup.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { EventsComponent } from './events/events.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AddEventComponent } from './add-event/add-event.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { EditEventsComponent } from './edit-events/edit-events.component';
import { ViewInsuranceComponent } from './view-insurance/view-insurance.component';
import { AddInsuranceComponent } from './add-insurance/add-insurance.component';
import { ViewEventComponent } from './view-event/view-event.component';
import { FaqComponent } from './faq/faq.component';
import { InboxComponent } from './inbox/inbox.component';
import { PoliciesComponent } from './policies/policies.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { AppointmentsComponent } from './appointments/appointments.component';
import { ChatbotComponent } from '../app/chatbot/chatbot.component';
import { TermsOfUseComponent } from './terms-of-use/terms-of-use.component';
import { ReportsComponent } from './reports/reports.component';
import { ViewReportComponent } from './view-report/view-report.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    FooterComponent,
    QuestionsComponent,
    ForgotPasswordComponent,
    HomePageComponent,
    SignupComponent,
    AdminDashboardComponent,
    UserDashboardComponent,
    ChatbotComponent,
    EventsComponent,
    UserProfileComponent,
    AddEventComponent,
    SidebarComponent,
    EditEventsComponent,
    ViewInsuranceComponent,
    AddInsuranceComponent,
    ViewEventComponent,
    FaqComponent,
    InboxComponent,
    PoliciesComponent,
    AboutUsComponent,
    AppointmentsComponent,
    TermsOfUseComponent,
    ReportsComponent,
    ViewReportComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
