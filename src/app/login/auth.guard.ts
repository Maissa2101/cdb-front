import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import {AuthenticationService} from "./authentificationService.service";

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router,private auth: AuthenticationService) { }




    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        //logged
        if (localStorage.getItem('token')) {
            console.info(localStorage.getItem('token'));
            console.info('in auth');

            return true;
        }

        else {
            // not logged
            this.router.navigate(['login']);
            console.info('in not auth')

            return false;
        }

    }
}