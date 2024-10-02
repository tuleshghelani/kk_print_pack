import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { trigger, transition, style, animate, state } from '@angular/animations';

interface Slide {
  image: string;
  state: 'active' | 'inactive';
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('500ms', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate('500ms', style({ opacity: 0 })),
      ]),
    ]),
    trigger('slideAnimation', [
      state('inactive', style({
        opacity: 0,
        transform: 'translateX(-100%)'
      })),
      state('active', style({
        opacity: 1,
        transform: 'translateX(0)'
      })),
      transition('inactive => active', animate('500ms ease-in')),
      transition('active => inactive', animate('500ms ease-out'))
    ]),
    // trigger('backgroundAnimation', [
    //   transition(':enter', [
    //     style({ opacity: 0 }),
    //     animate('1000ms', style({ opacity: 1 })),
    //   ]),
    // ]),
    trigger('backgroundAnimation', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('1000ms', style({ opacity: 1 })),
      ]),
    ]),
  ],
})
export class HomeComponent implements OnInit {
  particles: any[] = [];
  @ViewChild('heroSlider') heroSlider!: ElementRef;


  slides: Slide[] = [
    { image: '../../assets/dashboard-image/rotogravure_printing_machine.jpeg', state: 'active' },
    { image: '../../assets/dashboard-image/rotogravure_printing_machine_2.jpeg', state: 'active' },
  ];

  currentSlide = 0;
  counterValue = 0;
  targetCounterValue = 27;

  products = [
    { name: 'Flat Bottom', image: '../../assets/products/product-image.png' },
    { name: 'Spout', image: '../../assets/products/product-image.png' },
    { name: 'Zip-Lock', image: '../../assets/products/product-image.png' },
    { name: 'Stand Up', image: '../../assets/products/product-image.png' },
  ];

  ngOnInit() {
    this.startSlideshow();
    this.animateCounter();
    this.startProductAnimation();
    this.generateParticles();
  }


  generateParticles() {
    for (let i = 0; i < 50; i++) {
      this.particles.push({
        style: {
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          width: `${Math.random() * 10 + 5}px`,
          height: `${Math.random() * 10 + 5}px`,
          animationDuration: `${Math.random() * 10 + 5}s`,
          animationDelay: `${Math.random() * 5}s`
        }
      });
    }
  }

  startSlideshow() {
    setInterval(() => {
      this.nextSlide();
    }, 5000);
  }
  nextSlide() {
    const nextIndex = (this.currentSlide + 1) % this.slides.length;
    this.slides[this.currentSlide].state = 'inactive';
    this.slides[nextIndex].state = 'active';
    this.currentSlide = nextIndex;
  }

  prevSlide() {
    const prevIndex = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
    this.slides[this.currentSlide].state = 'inactive';
    this.slides[prevIndex].state = 'active';
    this.currentSlide = prevIndex;
  }

  animateCounter() {
    const duration = 2000;
    const steps = 27;
    const stepValue = this.targetCounterValue / steps;
    const stepDuration = duration / steps;

    const timer = setInterval(() => {
      this.counterValue += stepValue;
      if (this.counterValue >= this.targetCounterValue) {
        this.counterValue = this.targetCounterValue;
        clearInterval(timer);
      }
    }, stepDuration);
  }

  startProductAnimation() {
    setInterval(() => {
      this.products = [...this.products.slice(1), this.products[0]];
    }, 3000);
  }
}
