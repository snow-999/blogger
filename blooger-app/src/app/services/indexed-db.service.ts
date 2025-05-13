// src/app/services/indexed-db.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class IndexedDbService {
  private db!: IDBDatabase;
  private dbReady: Promise<IDBDatabase>;

  constructor() {
    this.dbReady = this.initDB();
  }

  private initDB(): Promise<IDBDatabase> {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open('BlogDB', 2);

      request.onerror = (event) => {
        console.error('Error opening DB', event);
        reject(event);
      };

      request.onsuccess = (event: any) => {
        this.db = event.target.result;
        console.log('DB opened');
        resolve(this.db);
      };

      request.onupgradeneeded = (event: any) => {
        const db = event.target.result;

        if (!db.objectStoreNames.contains('posts')) {
          const store = db.createObjectStore('posts', { keyPath: 'id' });
          store.createIndex('title', 'title', { unique: false });
          store.createIndex('date', 'date', { unique: false });
          store.createIndex('userName', 'userName', { unique: false });
        }
      };
    });
  }

  async savePost(post: any): Promise<void> {
    const db = await this.dbReady;
    const tx = db.transaction(['posts'], 'readwrite');
    const store = tx.objectStore('posts');
    store.put(post);
  }

  async getAllPosts(): Promise<any[]> {
    const db = await this.dbReady;
    return new Promise((resolve, reject) => {
      const tx = db.transaction(['posts'], 'readonly');
      const store = tx.objectStore('posts');
      const request = store.getAll();

      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error);
    });
  }
}

