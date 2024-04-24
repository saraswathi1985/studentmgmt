import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './user/login/login.component';
import { LogoutComponent } from './user/logout/logout.component';
import { RegisterComponent } from './user/register/register.component';
import { ForgotpasswordComponent } from './user/forgotpassword/forgotpassword.component';
import { AddstudentComponent } from './studentupgrade/addstudent/addstudent.component';
import { RemovestudentComponent } from './studentupgrade/removestudent/removestudent.component';
import { ViewstudentComponent } from './studentupgrade/viewstudent/viewstudent.component';
import { UpdatestudentComponent } from './studentupgrade/updatestudent/updatestudent.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LogoutComponent,
    RegisterComponent,
    ForgotpasswordComponent,
    AddstudentComponent,
    RemovestudentComponent,
    ViewstudentComponent,
    UpdatestudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
