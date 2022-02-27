import { Injectable } from '@angular/core';
import {CanActivate} from "@angular/router";
import {AuthService} from "./auth.service";
import {map, Observable, of, switchMap, tap} from "rxjs";
import {UserService} from "../user.service";


@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuard implements CanActivate{

  constructor(private auth: AuthService, private userService: UserService) { }

canActivate(): Observable<boolean>{
  return this.auth.user$.pipe(
    tap(console.log),
    switchMap(user =>  of(this.userService.get(user!.uid))),
    tap(console.log),
    map(appUser => appUser.isAdmin),
    tap(console.log)
  )
}
}
// canActivate(): Observable<boolean>{
//   return this.auth.user$.pipe(
//     tap(console.log),
//     switchMap(user =>  of(this.userService.get(user!.uid))),
//     tap(console.log),
//     map(appUser => appUser.isAdmin),
//     tap(console.log)
//   )
// }
