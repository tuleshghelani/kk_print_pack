import { Component, OnInit, ElementRef, ViewChild, HostListener } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-circular-products',
  templateUrl: './circular-products.component.html',
  styleUrls: ['./circular-products.component.scss'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('500ms', style({ opacity: 1 }))
      ])
    ])
  ]
})
export class CircularProductsComponent implements OnInit {
  @ViewChild('circleContainer') circleContainer!: ElementRef;
  
  products = [
    {
      name: 'Premium Food Packaging',
      image: 'assets/products/KADHAI_POST_6.png',
      description: 'High-quality food-grade packaging'
    },
    {
      name: 'Flexible Pouches',
      image: 'assets/products/KADHAI_POST_6.png',
      description: 'Customizable flexible solutions'
    },
    {
      name: 'Sustainable Packaging',
      image: 'assets/products/KADHAI_POST_6.png',
      description: 'Eco-friendly materials'
    }
  ];

  rotation = 0;
  isVisible = false;

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    const element = this.circleContainer.nativeElement;
    const rect = element.getBoundingClientRect();
    const isInViewport = rect.top <= window.innerHeight && rect.bottom >= 0;

    if (isInViewport) {
      this.isVisible = true;
      this.rotation = (window.scrollY - rect.top) * 0.1;
    }
  }

  ngOnInit() {
    // Initialize any required data
  }
} 