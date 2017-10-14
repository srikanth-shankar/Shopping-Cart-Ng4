import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {

  constructor(private db:AngularFireDatabase) { }
  
  Create(product){
    return this.db.list('Products').push(product);
  }
}
