import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { trigger, transition, style, animate, state, keyframes } from '@angular/animations';
import * as AOS from 'aos';
import { sliderAnimations } from '../animations/slider.animations';

interface Slide {
  image: string;
  state: string;
  content: {
    counter: {
      value: string | number;
      text: string;
      current: number;
    };
    title: string[];
  };
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
        opacity: 0
      })),
      state('active', style({
        opacity: 1
      })),
      transition('inactive => active', [
        animate('500ms ease-in', keyframes([
          style({ opacity: 0, offset: 0 }),
          style({ opacity: 1, offset: 1 })
        ]))
      ]),
      transition('active => inactive', [
        animate('500ms ease-out', keyframes([
          style({ opacity: 1, offset: 0 }),
          style({ opacity: 0, offset: 1 })
        ]))
      ])
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
    sliderAnimations.slideContent,
    sliderAnimations.imageReveal,
    sliderAnimations.textElements
  ],
})
export class HomeComponent implements OnInit {
  particles: any[] = [];
  @ViewChild('heroSlider') heroSlider!: ElementRef;


  slides = [
    {
      image: '../../assets/dashboard-image/rotogravure_printing_machine_2.jpeg',
      state: 'second',
      content: {
        counter: {
          value: '1M+',
          text: 'PRODUCTS DELIVERED',
          current: 0
        },
        title: ['INNOVATIVE', 'PRINTING SOLUTIONS', 'FOR YOUR BUSINESS']
      }
    },
    {
      image: '../../assets/dashboard-image/rotogravure_printing_machine.jpeg',
      state: 'first',
      content: {
        counter: {
          value: 27,
          text: "YEAR'S OF EXPERIENCE",
          current: 0
        },
        title: ['WE GIVE', 'FLEXIBLE PACKAGING', 'SOLUTIONS']
      }
    },
  ];

  currentSlide = 0;
  counterValue = 0;
  targetCounterValue = 27;

  products = [
    { name: 'Flat Bottom', image: 'assets/products/KADHAI_POST_6.png' },
    { name: 'Spout', image: '../../assets/products/product-image.png' },
    { name: 'Zip-Lock', image: 'assets/products/KADHAI_POST_6.png' },
    { name: 'Stand Up', image: '../../assets/products/product-image.png' },
  ];

  ngOnInit() {
    // Initialize AOS
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
      offset: 100
    });

    // Initialize counters immediately
    this.slides.forEach(slide => {
      if (typeof slide.content.counter.value === 'number') {
        slide.content.counter.current = slide.content.counter.value;
      }
    });

    this.startSlideshow();
    this.startProductAnimation();
    this.generateParticles();
  }

  // Add this method to refresh AOS on dynamic content changes
  ngAfterViewInit() {
    setTimeout(() => {
      AOS.refresh();
    }, 500);
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
    const prevIndex = this.currentSlide;
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
    
    // Reset animations for previous slide
    this.slides[prevIndex].state = 'inactive';
    
    // Trigger animations for new slide
    setTimeout(() => {
      this.slides[this.currentSlide].state = this.currentSlide === 0 ? 'first' : 'second';
      if (typeof this.slides[this.currentSlide].content.counter.value === 'number') {
        this.animateCounterForSlide(this.slides[this.currentSlide]);
      }
    }, 100);
  }

  prevSlide() {
    const prevIndex = this.currentSlide;
    this.currentSlide = this.currentSlide === 0 ? this.slides.length - 1 : this.currentSlide - 1;
    
    // Reset animations for previous slide
    this.slides[prevIndex].state = 'inactive';
    
    // Trigger animations for new slide
    setTimeout(() => {
      this.slides[this.currentSlide].state = this.currentSlide === 0 ? 'first' : 'second';
      if (typeof this.slides[this.currentSlide].content.counter.value === 'number') {
        this.animateCounterForSlide(this.slides[this.currentSlide]);
      }
    }, 100);
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

  private animateCounterForSlide(slide: Slide) {
    if (typeof slide.content.counter.value === 'number') {
      // Set the counter value immediately
      slide.content.counter.current = slide.content.counter.value;
    }
  }

  isNumber(value: any): boolean {
    return typeof value === 'number';
  }
}
