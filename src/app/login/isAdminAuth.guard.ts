import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import {AuthenticationService} from "./authentificationService.service";

@Injectable()
export class isAdminAuthGuard implements CanActivate {

  constructor(private router: Router,private auth: AuthenticationService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    //logged as admin
    if (localStorage.getItem('isAdmin')) {
      return true;
    }

    else {
      // not logged as admin
      this.router.navigate(['companies']);
      return false;
    }

  }
}
