import { Component } from '@angular/core';

@Component({
  selector: 'app-why-choose-us',
  templateUrl: './why-choose-us.component.html',
  styleUrls: ['./why-choose-us.component.scss']
})
export class WhyChooseUsComponent {
  features = [
    {
      icon: 'assets/icons/quality-icon.svg',
      title: 'Premium Quality',
      description: 'We maintain the highest standards in packaging materials and printing quality.'
    },
    {
      icon: 'assets/icons/innovation-icon.svg',
      title: 'Innovative Solutions',
      description: 'Our cutting-edge technology delivers modern packaging solutions.'
    },
    {
      icon: 'assets/icons/support-icon.svg',
      title: 'Expert Support',
      description: '24/7 dedicated support team to assist with all your packaging needs.'
    }
  ];
} 