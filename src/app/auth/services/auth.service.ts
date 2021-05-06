import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs/internal/Observable';
import { User } from '../models/user';
import { AuthQuery } from '../state/auth.query';
import { AuthStore } from '../state/auth.store';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public user: any;
  public user$: Observable<User>;

  constructor(
    public angularFireAuth: AngularFireAuth,
    private authStore: AuthStore,
    private authQuery: AuthQuery
  ) {
    this.user$ = this.authQuery.getUser$;

    this.angularFireAuth.authState.subscribe(user => {
      if (user && user.email) {
        this.user = user;

        this.authStore.update({user: {
          email: user.email,
          password: ''
        }});
      }
    });
  }

  signIn(email: string, password: string): Promise<any> {
    return this.angularFireAuth.signInWithEmailAndPassword(email, password); 
  }

  signOut() {
    return this.angularFireAuth.signOut();
  }
}
