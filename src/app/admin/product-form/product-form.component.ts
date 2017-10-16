import { Router } from '@angular/router';
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
  id;

  constructor(
    private catService:CategoryService, 
    private prodServ:ProductService,
    private route :ActivatedRoute,
    private router : Router
  ) {
    this.categories$ = catService.getCategories();
    this.id= this.route.snapshot.paramMap.get('id');
    if(this.id)
      this.prodServ.getProductByID(this.id).take(1).subscribe(p=>this.product=p);
   }

  ngOnInit() {
  }

  Save(product){
    if(this.id) this.prodServ.update(this.id, product);
    else this.prodServ.Create(product);

    this.router.navigate(['/admin/products']);
  }

  delete(){
    if(!confirm("Are you sure to delete?")) return;

      this.prodServ.delete(this.id);
      this.router.navigate(['/admin/products']);
  }
}
