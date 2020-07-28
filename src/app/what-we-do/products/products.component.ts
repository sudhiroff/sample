import { Component, OnInit, Input } from '@angular/core';
import { ProductService } from '../product.service';
declare var $: any;

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  @Input() paging = true;
  public data;
  public products: Array<any> = [
    { image: "Buildrock PC-01.png", text: "CONCRETE ADMIXTURE" },
    { image: "Buildrock PC-02.png", text: "CURING COMPUND" },
    { image: "Buildrock PC-03.png", text: "WATER PROOFING SOLUTION" },
    { image: "Buildrock PC-04.png", text: "MICROSILICA" },
    { image: "Buildrock PC-05.png", text: "SELEANTS AND ADDITIVES" },
    { image: "Buildrock PC-06.png", text: "COOL ROOF SOLUTION" },
    { image: "Buildrock PC-07.png", text: "MOULD RELEASE AGENT" },
    { image: "Buildrock PC-08.png", text: "M-SAND" },
    { image: "Buildrock PC-09.png", text: "CONCRETE ADMIXTURE" },
    { image: "Buildrock PC-10.png", text: "CURING COMPUND" },
    { image: "Buildrock PC-11.png", text: "WATER PROOFING SOLUTION" },
    { image: "Buildrock PC-12.png", text: "MICROSILICA" },
    { image: "Buildrock PC-13.png", text: "SELEANTS AND ADDITIVES" },
    { image: "Buildrock PC-14.png", text: "COOL ROOF SOLUTION" }
  ]
  constructor(private productService:ProductService) { }

  ngOnInit(): void {    
    this.productService.getProduct()
    .subscribe(result=>{
      if (this.paging == false) {
        this.data=result.slice(0, 8);
      }else{
        this.data=result;
      }
    })
  }

}
