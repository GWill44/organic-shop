import {Injectable, OnDestroy, OnInit} from '@angular/core';
import {AngularFireAuth} from "@angular/fire/compat/auth";
import firebase from "firebase/compat/app";
import {Subscription} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnInit, OnDestroy{
  user: firebase.User | null;
  authStateSub: Subscription;

  constructor(private afAuth: AngularFireAuth) {
    this.authStateSub = this.afAuth.authState.subscribe(user => {
      this.user = user;
      console.log(user)
    });
  }

  login() {
    const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
    void this.afAuth.signInWithPopup(googleAuthProvider);
  }
  logout() {
    void this.afAuth.signOut();
  }

  ngOnInit(): void {
    this.authStateSub = this.afAuth.authState.subscribe(user => {
      this.user = user;
      console.log(user)
    });
  }
  ngOnDestroy(): void {
    this.authStateSub.unsubscribe();
  }
}
