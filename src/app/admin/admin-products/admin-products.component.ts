import { Product } from './../../models/product';
import { ProductService } from './../../product.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from "rxjs/Subscription";

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit, OnDestroy {
  products:Product[] = [];
  filteredProducts : any[] = [];
  subscription:Subscription

  constructor(private ps:ProductService) { 
    this.subscription = this.ps.getAll()
      .subscribe(prods=>this.filteredProducts = this.products=prods);
  }
  
  ngOnInit() {
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  filter(query){
    this.filteredProducts = (query)?
      this.products.filter(p=>p.title.toLowerCase().includes(query.toLowerCase())) 
      : this.products;
  }
}
