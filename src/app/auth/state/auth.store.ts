import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { User } from '../models/user';

interface Auth {
  user: User
}

export interface AuthState extends EntityState<Auth> {
  user: User;
}

export function createInitialState(): AuthState {
  return {
    user: new User()
  };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'auth' })
export class AuthStore extends EntityStore<AuthState> {
  constructor() {
    super(createInitialState());
  }
}
