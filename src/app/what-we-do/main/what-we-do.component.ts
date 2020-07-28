import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-what-we-do',
  templateUrl: './what-we-do.component.html',
  styleUrls: ['./what-we-do.component.css']
})
export class WhatWeDoComponent implements OnInit {
  public data:Array<any>;
  public service:Array<any>;
  public type:String="Product";
  public category:String=""
  constructor(private router:Router,private productService:ProductService) { }

  ngOnInit(): void {
    this.productService.getProduct()
    .subscribe((result:Array<any>)=>{
       this.data=result.filter(i=> i['Type']=="Product");
       this.service=result.filter(i=> i['Type']=="Service");
    })
  }

  public click_type(e,type){
    if (e.target['tagName'] == "A" || e.target['tagName'] == "a") {
      this.type=type;
      this.category=e.target['text'];
      this.router.navigateByUrl("/what-we-do/products");
    }    
  }

  public click_category(type:String){
    this.category="";
    this.router.navigateByUrl("/what-we-do");
  }
}
