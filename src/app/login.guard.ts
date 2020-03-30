import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(private localStorageService:LocalStorageService, private router:Router){

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      const user = this.localStorageService.getUser();
      const role = this.localStorageService.getRole()
      if(user){
        if(role == 'admin')
        this.router.navigate(['/adminDashboard']);
        else{
          this.router.navigate(['/userDashboard']);
        }
        return false;
      }
      else{
        return true;
      }
  }
}
