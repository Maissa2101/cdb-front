import { Injectable } from "@angular/core";
import {
  Router,
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from "@angular/router";
import { AuthenticationService } from "./authentificationService.service";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private auth: AuthenticationService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (localStorage.getItem("token")) {
      return true;
    } else {
      this.router.navigate(["companies"]);
      return false;
    }
  }
}
