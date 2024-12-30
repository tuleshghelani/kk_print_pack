import { trigger, transition, style, animate, query, stagger, state } from '@angular/animations';

export const sliderAnimations = {
  slideContent: trigger('slideContent', [
    state('first', style({ opacity: 1, transform: 'translateX(0)' })),
    state('second', style({ opacity: 1, transform: 'translateX(0)' })),
    
    transition('void => first', [
      style({ opacity: 0, transform: 'translateX(-100px)' }),
      animate('0.8s cubic-bezier(0.35, 0, 0.25, 1)')
    ]),
    
    transition('void => second', [
      style({ opacity: 0, transform: 'translateX(100px)' }),
      animate('0.8s cubic-bezier(0.35, 0, 0.25, 1)')
    ])
  ]),

  imageReveal: trigger('imageReveal', [
    transition(':enter', [
      style({ transform: 'scale(1.2)', filter: 'brightness(0)' }),
      animate('1.5s cubic-bezier(0.4, 0, 0.2, 1)', 
        style({ transform: 'scale(1)', filter: 'brightness(1)' }))
    ])
  ]),

  textElements: trigger('textElements', [
    transition(':enter', [
      query('.animated-text', [
        style({ opacity: 0, transform: 'translateY(30px)' }),
        stagger(200, [
          animate('0.6s cubic-bezier(0.35, 0, 0.25, 1)', 
            style({ opacity: 1, transform: 'translateY(0)' }))
        ])
      ])
    ])
  ])
};