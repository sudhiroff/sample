import { Component, OnInit } from '@angular/core';
import { category } from '../../data/category';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-types',
  templateUrl: './product-types.component.html',
  styleUrls: ['./product-types.component.css']
})
export class ProductTypesComponent implements OnInit {
  public types:Array<any>=category[0].items;
  public data:Array<any>;
  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    this.productService.getProduct()
    .subscribe((result:Array<any>)=>{
       this.data=result.filter(i=> i['Type']=="Product");
    });
  }

}
