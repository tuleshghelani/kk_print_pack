import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ProductsComponent } from './products/products.component';
import { InfrastructureComponent } from './infrastructure/infrastructure.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HeaderComponent } from './header/header.component';
import { StrengthComponent } from './strength/strength.component';
import { FooterComponent } from './footer/footer.component';
import { QualityComponent } from './quality/quality.component';
import { CareerComponent } from './career/career.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CircularProductsComponent } from './components/circular-products/circular-products.component';
import { WhyChooseUsComponent } from './components/why-choose-us/why-choose-us.component';
import { ProductShowcaseComponent } from './components/product-showcase/product-showcase.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutUsComponent,
    ProductsComponent,
    InfrastructureComponent,
    ContactUsComponent,
    HeaderComponent,
    StrengthComponent,
    FooterComponent,
    QualityComponent,
    CareerComponent,
    CircularProductsComponent,
    WhyChooseUsComponent,
    ProductShowcaseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
