import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { AuthState, AuthStore } from './auth.store';

@Injectable({ providedIn: 'root' })
export class AuthQuery extends QueryEntity<AuthState> {
  getUser$ = this.select(state => state.user);

  constructor(protected store: AuthStore) {
    super(store);
  }
}
