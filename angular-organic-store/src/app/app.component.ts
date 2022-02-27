import {Component, OnDestroy} from '@angular/core';
import {AuthService} from "./auth/auth.service";
import {Router} from "@angular/router";
import {Subscription} from "rxjs";
import {UserService} from "./user.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {

  userSub: Subscription;

  constructor(private userService: UserService, private auth: AuthService , private router: Router) {
    this.userSub = this.auth.user$.subscribe(user => {
      if (user) {
        userService.save(user);
        let returnUrl = localStorage.getItem('returnUrl');
        void this.router.navigateByUrl(returnUrl!);
      }
    })
  }

  ngOnDestroy(): void {
    this.userSub.unsubscribe();
  }
}
