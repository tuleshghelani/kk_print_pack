import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
    CareerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
