import { Component } from '@angular/core';

@Component({
  selector: 'app-product-showcase',
  templateUrl: './product-showcase.component.html',
  styleUrls: ['./product-showcase.component.scss']
})
export class ProductShowcaseComponent {
  products = [
    {
      name: 'Flat Bottom Pouches',
      image: 'assets/products/product-image.png',
      description: 'Premium quality flat bottom pouches with custom printing',
      tags: ['Custom Size', 'Food Grade', 'Recyclable']
    },
    {
      name: 'Stand-Up Pouches',
      image: 'assets/products/KADHAI_POST_6.png',
      description: 'Durable stand-up pouches with innovative design',
      tags: ['Resealable', 'Moisture Proof', 'Custom Print']
    },
    {
      name: 'Spout Pouches',
      image: 'assets/products/Pet-Food.jpg',
      description: 'Convenient spout pouches for liquid packaging',
      tags: ['Easy Pour', 'Child Safe', 'Leak Proof']
    }
  ];
} 