import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './home/home.component';
import { WhatWeDoComponent } from './what-we-do/what-we-do.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { WhoWeAreComponent } from './who-we-are/who-we-are.component';

const routes: Routes = [
  {
    path: "", component: LayoutComponent, children:
      [
        { path: "", component: HomeComponent },
        { path: "who-we-are", component: WhoWeAreComponent },
        { path: "what-we-do", component: WhatWeDoComponent },
        { path: "contact-us", component: ContactUsComponent },
      ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
