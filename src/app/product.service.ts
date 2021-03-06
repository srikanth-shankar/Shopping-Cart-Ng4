import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {

  constructor(private db:AngularFireDatabase) { }
  
  Create(product){
    return this.db.list('Products').push(product);
  }

  getAll(){
    return this.db.list('/Products');
  }

  getProductByID(prodId){
   return this.db.object('/Products/'+ prodId);
  }

  update(productId, product){
    return this.db.object('/Products/'+ productId).update(product);
  }

  delete(productId){
    return this.db.object('/Products/'+ productId).remove();
  }
}
