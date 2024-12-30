import { Component, OnInit, ElementRef, ViewChild, HostListener } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-query-section',
  templateUrl: './query-section.component.html',
  styleUrls: ['./query-section.component.scss'],
  animations: [
    trigger('slideProduct', [
      transition(':enter', [
        style({ transform: 'translateX(100%)', opacity: 0 }),
        animate('0.8s ease-out', style({ transform: 'translateX(0)', opacity: 1 }))
      ])
    ])
  ]
})
export class QuerySectionComponent implements OnInit {
  @ViewChild('productImage') productImage!: ElementRef;
  translateX = 100;

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    if (this.productImage) {
      const rect = this.productImage.nativeElement.getBoundingClientRect();
      const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;
      
      if (rect.top <= windowHeight && rect.bottom >= 0) {
        const scrollPercentage = (windowHeight - rect.top) / (windowHeight + rect.height);
        this.translateX = Math.max(0, 100 - (scrollPercentage * 100));
      } else if (rect.top > windowHeight) {
        this.translateX = 100;
      }
    }
  }

  ngOnInit() {
    setTimeout(() => this.onScroll(), 100);
  }
} 