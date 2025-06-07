// people.service.ts
import { ApplicationConfig, Injectable, NgModule } from '@angular/core';
import { NgxIndexedDBService, WithID } from 'ngx-indexed-db';
import { DBConfig, provideIndexedDb } from 'ngx-indexed-db';
import { User } from '../models/user.model';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class userService {
  constructor(private dbService: NgxIndexedDBService) {}

  addUser(user: User) {
    return this.dbService.add('user', user);
  }

  getAllUsers() {
    return this.dbService.getAll('user');
  }

  getUserById(id: number) {
    return this.dbService.getByKey('user', id);
  }
  getUserByEmail(email: string) {
    return this.dbService.getAll('user').pipe(
      map((users: any[]) => users.find(user => user.email === email))
    );
  }

  deleteUser(id: string) {
    return this.dbService.delete('user', id);
  }
}
