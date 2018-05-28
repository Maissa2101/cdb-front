import { Injectable } from "@angular/core";
import {
  Router,
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from "@angular/router";

@Injectable()
export class RoleGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (localStorage.getItem("role") && localStorage.getItem("role") === "ROLE_ADMIN") {
      return true;
    } else {
      this.router.navigate(["companies"]);
      return false;
    }
  }
}
