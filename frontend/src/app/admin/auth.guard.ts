import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AdminApiService } from './admin-api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthgGuard implements CanActivate {
  // canActivate(
  //   route: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  //   return true;
  // }

  constructor(private api: AdminApiService, private router: Router) { }

  canActivate(): boolean {
    if (this.api.isLoggedin()) {
      return true;

    }
    else {
      this.router.navigate(['/admin'])
      return false;
    }
  }
}
  

