import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authservices:AuthService){}
  canActivate(){
    if(this.authservices.islogged()){
      return true
    }else{
      window.alert("you need to login to visit this page");
      return false
    }
  }
}
