import { Component } from '@angular/core';
import {AuthService} from "../../service/auth/auth.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {throwError} from "rxjs";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  invalidLogin!: boolean;
  form = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  })

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService) {}

  onSubmit(credentials: any) {
    this.authService.login(credentials.username, credentials.password)
      .subscribe({
        next: result => {
          let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl');
          void this.router.navigate([returnUrl || '/']);
        },
        error: error => {
          this.invalidLogin = true;
          throwError(() => error);
        }
      })
  }

  get username(){ return this.form.get('username'); }
  get password(){ return this.form.get('password'); }
}
