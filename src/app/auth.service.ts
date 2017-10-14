import { UserService } from './user.service';
import { AppUser } from './models/app-user';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { ActivatedRoute } from "@angular/router";
import 'rxjs/add/operator/switchMap';

@Injectable()
export class AuthService {
  
  user$:Observable<firebase.User>;
  
  constructor(private afAuth:AngularFireAuth, private route:ActivatedRoute, private us:UserService) { 
    this.user$ = afAuth.authState;
  }

  login(){
    let reuturnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
    localStorage.setItem('returnUrl', reuturnUrl);
    this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }

  logout(){
    this.afAuth.auth.signOut();
  }

  get appUser$():Observable<AppUser>{
    return this.user$
    .switchMap(user=>{
      return this.us.get(user.uid);
    })
  }
}
