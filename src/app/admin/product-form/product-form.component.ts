import { ProductService } from './../../product.service';
import { CategoryService } from './../../category.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  categories$;
  constructor(catService:CategoryService, private prodServ:ProductService) {
    this.categories$ = catService.getCategories();
   }

  ngOnInit() {
  }

  Save(product){
    this.prodServ.Create(product);
  }
}
