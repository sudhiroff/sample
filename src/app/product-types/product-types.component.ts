import { Component, OnInit } from '@angular/core';
import { category } from '../data/category';

@Component({
  selector: 'app-product-types',
  templateUrl: './product-types.component.html',
  styleUrls: ['./product-types.component.css']
})
export class ProductTypesComponent implements OnInit {
  public types:Array<any>=category[0].items;
  constructor() { }

  ngOnInit(): void {
  }

}
