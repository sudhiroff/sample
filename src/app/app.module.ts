import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './main/app.component';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { WhoWeAreComponent } from './who-we-are/who-we-are.component';
import { WhatWeDoComponent } from './what-we-do/main/what-we-do.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ProductsComponent } from './what-we-do/products/products.component';
import { ClientsComponent } from './clients/clients.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { GoogleMapComponent } from './google-map/google-map.component';
//import { InnerLayoutComponent } from './inner-layout/inner-layout.component';
import { ServicesComponent } from './services/services.component';
// import { DetailComponent } from './detail/detail.component';
// import { ProductTypesComponent } from './what-we-do/product-types/product-types.component';
import { ForumComponent } from './forum/list/forum.component';
import { NgxCaptchaModule } from 'ngx-captcha';
import { MenuComponent } from './menu/menu.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ChooseUsComponent } from './choose-us/choose-us.component';
import { QualityComponent } from './quality/quality.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './materila-module';
import { ForumDetailComponent } from './forum/forum-detail/forum-detail.component';
import { AdmixtureComponent } from './forum/admixture/admixture.component';
import { WaterprofingComponent } from './forum/waterprofing/waterprofing.component';
import { HttpClientModule } from '@angular/common/http';

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
    //InnerLayoutComponent,
    ServicesComponent,
  //  DetailComponent,
   // ProductTypesComponent,
    ForumComponent,
    MenuComponent,
    ChooseUsComponent,
    QualityComponent,
    ForumDetailComponent,
    AdmixtureComponent,
    WaterprofingComponent
  ],
  imports: [
    BrowserModule,
    NgxCaptchaModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    HttpClientModule,
    BrowserAnimationsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
