import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/common/product';
import { ProductService } from 'src/app/services/product.service';


@Component({
  selector: 'app-product-list',
 // templateUrl: './product-list-table.component.html',
  templateUrl: './product-list-grid.component.html',
  //templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  products!: Product[];
  currentCategoryId!: number;

  constructor(private productService: ProductService, private route: ActivatedRoute){}

  ngOnInit(){

    this.route.paramMap.subscribe(() =>{
    this.listProducts();
  });

  }

  listProducts(){

    // check if "id" parameter is available
    const hasCategoryId: boolean = this.route.snapshot.paramMap.has('id');
    

    if(hasCategoryId){
      // get the "id" param string. covert string to a number using the "+" symbol
      
      // issue here ????
      this.currentCategoryId = +(this.route.snapshot.paramMap.get('id')?('2'):'');

    }
    else {
      // not catgeory id available .. default to category id = 1 
      this.currentCategoryId = 1;
    }

    // now  get the products for the given category id
    this.productService.getProductLsit(this.currentCategoryId).subscribe(
      data => {
        this.products = data;
      } 
    )
  }
}
