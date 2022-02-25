import {Component, OnDestroy, OnInit} from '@angular/core';
import {AngularFireAuth} from "@angular/fire/compat/auth";
import firebase from "firebase/compat/app";
import {Subscription} from "rxjs";

@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent implements OnInit, OnDestroy {
  user: firebase.User | null;
  private authStateSubscription: Subscription;

  constructor(private afAuth: AngularFireAuth) {}

  ngOnInit() {
    this.authStateSubscription = this.afAuth.authState.subscribe(user => this.user = user);
  }
  ngOnDestroy() {
    this.authStateSubscription.unsubscribe();
  }

  logout() {
     this.afAuth.signOut();
  }
}
