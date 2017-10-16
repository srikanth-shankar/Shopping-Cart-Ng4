import { ActivatedRoute } from '@angular/router';
import { ProductService } from './../../product.service';
import { CategoryService } from './../../category.service';
import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/take';
@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  categories$;
  product={};
  constructor(
    private catService:CategoryService, 
    private prodServ:ProductService,
    private route :ActivatedRoute
  ) {
    this.categories$ = catService.getCategories();
    let id= this.route.snapshot.paramMap.get('id');
    if(id)
      this.prodServ.getProductByID(id).take(1).subscribe(p=>this.product=p);
   }

  ngOnInit() {
  }

  Save(product){
    this.prodServ.Create(product);
  }
}
