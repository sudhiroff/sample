import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './main/app.component';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { WhoWeAreComponent } from './who-we-are/who-we-are.component';
import { WhatWeDoComponent } from './what-we-do/what-we-do.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ProductsComponent } from './products/products.component';
import { ClientsComponent } from './clients/clients.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { GoogleMapComponent } from './google-map/google-map.component';
import { InnerLayoutComponent } from './inner-layout/inner-layout.component';
import { ServicesComponent } from './services/services.component';
import { DetailComponent } from './detail/detail.component';
import { ProductTypesComponent } from './product-types/product-types.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    WhoWeAreComponent,
    WhatWeDoComponent,
    ContactUsComponent,
    ProductsComponent,
    ClientsComponent,
    TestimonialComponent,
    GoogleMapComponent,
    InnerLayoutComponent,
    ServicesComponent,
    DetailComponent,
    ProductTypesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
