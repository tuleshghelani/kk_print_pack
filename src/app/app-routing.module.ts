import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { HomeComponent } from './home/home.component';
import { InfrastructureComponent } from './infrastructure/infrastructure.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { StrengthComponent } from './strength/strength.component';
import { QualityComponent } from './quality/quality.component';
import { CareerComponent } from './career/career.component';

const routes: Routes = [
  { path: '', component: HomeComponent }, // company profile
  { path: 'products', component: ProductsComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'infrastructure', component: InfrastructureComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'strength', component: StrengthComponent },
  { path: 'quality', component: QualityComponent },
  { path: 'career', component: CareerComponent },
  { path: '**',  redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
