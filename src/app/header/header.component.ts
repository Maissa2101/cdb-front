import { Component, OnInit } from "@angular/core";
import { AuthenticationService } from "../login/authentificationService.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  constructor(private authService:AuthenticationService) {}

  ngOnInit() {}

  isConnected(): boolean {
    if (localStorage.getItem("token")) {
      return true;
    }
    return false;
  }

  logout(){
    this.authService.logout();
  }
}
