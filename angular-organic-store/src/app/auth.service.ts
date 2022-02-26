import {Injectable, OnDestroy, OnInit} from '@angular/core';
import {AngularFireAuth} from "@angular/fire/compat/auth";
import firebase from "firebase/compat/app";
import {map, Observable, Subject, Subscription, tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: Observable<firebase.User | null>

  constructor(private afAuth: AngularFireAuth) {
    this.user$ = afAuth.authState;
  }

  login() {
    const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
    void this.afAuth.signInWithPopup(googleAuthProvider);
  }

  logout() {
    void this.afAuth.signOut();
  }

  isLoggedIn() {
    return this.afAuth.authState.pipe(
      map(user => {
        return user !== null;
        }
      )
    );
  }
  // authStateSub: Subscription;
  // user$: Subject<firebase.User | null>;
  //
  // constructor(private afAuth: AngularFireAuth) { }
  //
  // login() {
  //   const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
  //   void this.afAuth.signInWithPopup(googleAuthProvider);
  //   this.getUser();
  // }
  // logout() {
  //   void this.afAuth.signOut();
  // }
  //
  // userIsLogged(){
  //   this.afAuth.authState
  //   return !!this.user;
  // }
  //
  // getUser(){
  //   this.user$.next(this.afAuth.authState.subscribe(user => { return user }) // Subscribe to authState, then push user in subscription.
  // )
  // }
  //
  // ngOnInit(): void {
  //   console.log("hello")
  //   this.authStateSub = this.afAuth.authState.subscribe(user => {
  //     this.user = user;
  //     console.log(user)
  //   });
  // }
  // ngOnDestroy(): void {
  //   this.authStateSub.unsubscribe();
  // }
}
