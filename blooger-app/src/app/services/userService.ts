import { Injectable } from '@angular/core';
import { NgxIndexedDBService } from 'ngx-indexed-db';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private dbService: NgxIndexedDBService) {}

  addUser(user: { name: string; email: string }) {
    return this.dbService.add('users', user);
  }

  getUserById(id: number) {
    return this.dbService.getByKey('users', id);
  }

  getAllUsers() {
    return this.dbService.getAll('users');
  }

  updateUser(user: { id: number; name: string; email: string }) {
    return this.dbService.update('users', user);
  }

  deleteUser(id: number) {
    return this.dbService.delete('users', id);
  }
}
