import { Injectable } from '@angular/core';

interface User {
  id: number;
  name: string;
  email: string;
}

@Injectable({
  providedIn: 'root'
})
export class IndexedDBService {
  private dbName = 'myDatabase';
  private dbVersion = 1;
  private db: IDBDatabase | null = null;

  constructor() { }

  // Open the database
  openDatabase() {
    return new Promise<IDBDatabase>((resolve, reject) => {
      const request = indexedDB.open(this.dbName, this.dbVersion);

      request.onerror = (event) => {
        reject(`Error opening database: ${event.target}`);
      };

      request.onsuccess = (event) => {
        const db = (event.target as IDBRequest).result as IDBDatabase;
        this.db = db;
        resolve(db);
      };

      request.onupgradeneeded = (event) => {
        const db = (event.target as IDBRequest).result;
        const store = db.createObjectStore('users', { keyPath: 'id' });
        store.createIndex('name', 'name', { unique: false });
      };
    });
  }

  // Add a new user
  addUser(user: User) {
    return this.openDatabase().then(db => {
      const transaction = db.transaction('users', 'readwrite');
      const store = transaction.objectStore('users');
      return new Promise((resolve, reject) => {
        const request = store.add(user);
        request.onsuccess = () => resolve('User added successfully');
        request.onerror = (event) => reject(`Error adding user: ${event.target}`);
      });
    });
  }

  // Get all users
  getUsers() {
    return this.openDatabase().then(db => {
      const transaction = db.transaction('users', 'readonly');
      const store = transaction.objectStore('users');
      return new Promise((resolve, reject) => {
        const request = store.getAll(); // Fetch all users
        request.onsuccess = () => resolve(request.result);
        request.onerror = (event) => reject(`Error fetching users: ${event.target}`);
      });
    });
  }

  // Delete a user by ID
  deleteUser(id: number) {
    return this.openDatabase().then(db => {
      const transaction = db.transaction('users', 'readwrite');
      const store = transaction.objectStore('users');
      return new Promise((resolve, reject) => {
        const request = store.delete(id);
        request.onsuccess = () => resolve('User deleted successfully');
        request.onerror = (event) => reject(`Error deleting user: ${event.target}`);
      });
    });
  }
}
