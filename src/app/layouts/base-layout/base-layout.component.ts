import { CookieService } from "ngx-cookie-service";
/**
 * Title: base-layout.component.ts
 * Author: Professor Krasso
 * Date: 8/5/23
 */

// imports statements
import { Component } from "@angular/core";
//import { CookieService } from "ngx-cookie-service";

@Component({
  selector: "app-base-layout",
  templateUrl: "./base-layout.component.html",
  styleUrls: ["./base-layout.component.css"],
})
export class BaseLayoutComponent {
  constructor(private cookieService: CookieService) {}

  signout() {
    this.cookieService.deleteAll();
    window.location.href = "/#/signin";
  }
}
