import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';//we should import them if not imported
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AuthGuard } from './Guards/auth.guard';
import { UnsavedGuard } from './Guards/unsaved.guard';
import { LoginComponent } from './login/login.component';
import { RegestrationComponent } from './regestration/regestration.component';
import { UsersComponent } from './users/users.component';

//create a variable of routes:Routes
const routes: Routes = [
  {path:"",redirectTo:"login",pathMatch:"full"},
  {path:"users",component:UsersComponent,canActivate:[AuthGuard]},
  {path:"aboutus",component:AboutusComponent,canActivate:[AuthGuard]},
  {path:"login",component:LoginComponent,canDeactivate:[UnsavedGuard]},
  {path:"regestration",component:RegestrationComponent,canActivate:[AuthGuard]},
  {path:"contactus",component:ContactusComponent,canActivate:[AuthGuard]},
  {path:"**",component:ContactusComponent}//if u write anything which is not related it will route to the given component
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],//forRoot() will perform routing
  exports: [RouterModule]
})
export class AppRoutingModule { }
