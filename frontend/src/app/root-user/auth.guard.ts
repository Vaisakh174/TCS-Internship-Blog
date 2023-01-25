import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { RootUserApiService } from './root-user-api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthgGuard implements CanActivate {
  // canActivate(
  //   route: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  //   return true;
  // }

  constructor(private api: RootUserApiService, private router: Router) { }

  canActivate(): boolean {
    if (this.api.isLoggedin()) {
      return true;

    }
    else {
      this.router.navigate(['/rootuser'])
      return false;
    }
  }
}
  
