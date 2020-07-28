import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ProductTypesComponent } from './product-types/product-types.component';
import { ProductsComponent } from './products/products.component';
import { DetailComponent } from '../detail/detail.component';

const routes: Routes = [
  { path: "", component: ProductTypesComponent },
  { path: "products", component: ProductsComponent },
  { path: "products/detail/:id", component: DetailComponent }
];

@NgModule({
  declarations: [
    ProductTypesComponent,
    //ProductsComponent,
    DetailComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class ProductModule { }
