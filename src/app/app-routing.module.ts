import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './home/home.component';
import { WhatWeDoComponent } from './what-we-do/what-we-do.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { WhoWeAreComponent } from './who-we-are/who-we-are.component';
import { InnerLayoutComponent } from './inner-layout/inner-layout.component';
import { DetailComponent } from './detail/detail.component';
import { ProductsComponent } from './products/products.component';
import { ProductTypesComponent } from './product-types/product-types.component';

const routes: Routes = [
  {
    path: "", component: LayoutComponent, children:
      [
        { path: "", component: HomeComponent },
      ]
  },
  {
    path: "", component: InnerLayoutComponent, children: [
      { path: "contact-us", component: ContactUsComponent },
      { path: "who-we-are", component: WhoWeAreComponent },
      {
        path: "what-we-do", component: WhatWeDoComponent, children: [
          { path: "", component: ProductTypesComponent },
          { path: "products", component: ProductsComponent },
          { path: "products/detail/:id", component: DetailComponent }
        ]
      },
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
