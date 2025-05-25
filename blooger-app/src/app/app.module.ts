import { NgModule } from '@angular/core';
import { NgxIndexedDBModule, DBConfig } from 'ngx-indexed-db';

const dbConfig: DBConfig = {
  name: 'MyDb',
  version: 1,
  objectStoresMeta: [
    {
      store: 'users',
      storeConfig: { keyPath: 'id', autoIncrement: true },
      storeSchema: [
        { name: 'name', keypath: 'name', options: { unique: false } },
        { name: 'email', keypath: 'email', options: { unique: true } }
      ]
    }
  ]
};

@NgModule({
  imports: [
    NgxIndexedDBModule.forRoot(dbConfig)
  ],
})
export class AppModule {}
