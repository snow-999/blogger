import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { DBConfig, provideIndexedDb } from 'ngx-indexed-db';

const dbConfig: DBConfig = {
  name: 'MyDb',
  version: 1,
  objectStoresMeta: [{
    store: 'user',
    storeConfig: { keyPath: 'userId', autoIncrement: true },
    storeSchema: [
      { name: 'userName', keypath: 'userName', options: { unique: false } },
      { name: 'email', keypath: 'email', options: { unique: false } },
      { name: 'password', keypath: 'password', options: { unique: false } },
      { name: 'phoneNumber', keypath: 'phoneNumber', options: { unique: false } }
    ]
  }, {
    store: 'posts',
    storeConfig: { keyPath: 'postId', autoIncrement: true },
    storeSchema: [
      { name: 'title', keypath: 'title', options: { unique: false } },
      { name: 'content', keypath: 'content', options: { unique: false } },
      { name: 'date', keypath: 'date', options: { unique: false } },
      { name: 'userId', keypath: 'userId', options: { unique: false } },
      { name: 'userName', keypath: 'userName', options: { unique: false } },
    ]
  }]
};

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideIndexedDb(dbConfig)]
};
