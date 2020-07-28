import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './home/home.component';
import { WhatWeDoComponent } from './what-we-do/main/what-we-do.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { WhoWeAreComponent } from './who-we-are/who-we-are.component';
// import { InnerLayoutComponent } from './inner-layout/inner-layout.component';
// import { DetailComponent } from './detail/detail.component';
// import { ProductsComponent } from './what-we-do/products/products.component';
// import { ProductTypesComponent } from './what-we-do/product-types/product-types.component';
import { QualityComponent } from './quality/quality.component';
import { ForumDetailComponent } from './forum/forum-detail/forum-detail.component';
import { AdmixtureComponent } from './forum/admixture/admixture.component';
import { WaterprofingComponent } from './forum/waterprofing/waterprofing.component';

const routes: Routes = [
  {
    path: "", component: LayoutComponent, children:
      [
        { path: "", component: HomeComponent,data:{name:'home'} },
        { path: "contact-us", component: ContactUsComponent },
        { path: "about-buildrock", component: WhoWeAreComponent },
        { path: "quality-assurance", component: QualityComponent },
        { path: "forum/Apropos_of_Superplasticizers_in_Concrete", component: ForumDetailComponent },
        { path: "forum/elucidating_the_term_Admixtures", component: AdmixtureComponent },
        { path: "forum/Process_of_Waterproofing_in_Buildings", component: WaterprofingComponent },
        // {
        //   path: "what-we-do", component: WhatWeDoComponent, children: [
        //     { path: "", component: ProductTypesComponent },
        //     { path: "products", component: ProductsComponent },
        //     { path: "products/detail/:id", component: DetailComponent }
        //   ]
        // },
        //{
        { path: "what-we-do", component: WhatWeDoComponent, 
         loadChildren: () => import('./what-we-do/product.module').then(m => m.ProductModule)
        }
      ]
  },
  // {
  //   path: "", component: InnerLayoutComponent, children: [
     
  //   ]
  // }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
