import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  @Input() paging=true;
  public products:Array<any>=[
    {image:"01-thumbnail.jpg",text:"CONCRETE ADMIXTURE"},
    {image:"02-thumbnail.jpg",text:"CURING COMPUND"},
    {image:"03-thumbnail.jpg",text:"WATER PROOFING SOLUTION"},
    {image:"04-thumbnail.jpg",text:"MICROSILICA"},
    {image:"05-thumbnail.jpg",text:"SELEANTS AND ADDITIVES"},
    {image:"06-thumbnail.jpg",text:"COOL ROOF SOLUTION"},
    {image:"03-thumbnail.jpg",text:"MOULD RELEASE AGENT"},
    {image:"01-thumbnail.jpg",text:"M-SAND"}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
