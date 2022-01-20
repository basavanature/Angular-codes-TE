import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { LoginComponent } from './login/login.component';
import { ContactusComponent } from './contactus/contactus.component';
import { RegestrationComponent } from './regestration/regestration.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AuthGuard } from './Guards/auth.guard';
import { UnsavedGuard } from './Guards/unsaved.guard';


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    AboutusComponent,
    LoginComponent,
    ContactusComponent,
    RegestrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AuthGuard,UnsavedGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
