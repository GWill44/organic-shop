import { Injectable } from '@angular/core';
import {CanActivate, Router} from "@angular/router";
import {AuthService} from "./auth.service";

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuard implements CanActivate{

  constructor(
    private router: Router,
    private auth: AuthService) { }

  canActivate() {
    return this.auth.currentUser!.admin;
  }
}
