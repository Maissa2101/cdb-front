import { Component, OnInit } from "@angular/core";
import { AuthenticationService } from "../login/authentificationService.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {}

  ngOnInit() {}

  isConnected(): boolean {
    if (localStorage.getItem("token")) {
      return true;
    }
    return false;
  }

  goToHomePage() {
    this.router.navigate([`/companies/`]);
  }

  logout() {
    this.authService.logout();
  }
}
