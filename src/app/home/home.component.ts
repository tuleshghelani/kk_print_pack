import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    AOS.init()
    // Start the recursion
    this.attemptAuthentication(0)
  }

  attemptAuthentication(attempts:any) {
    const counter1Element:any = document.getElementById("counter1");
    const counter2Element:any = document.getElementById("counter2");
    const counter3Element:any = document.getElementById("counter3");
    // const messageElement:any = document.getElementById("message");
    const maxAttempts = 27;

    if (attempts >= maxAttempts) {
      counter1Element.style.color = "black"
      counter1Element.style.fontSize = '200px'
      counter2Element.style.color = "black"
      counter2Element.style.fontSize = '200px'
      counter3Element.style.color = "black"
      counter3Element.style.fontSize = '200px'
      // messageElement.textContent = "Maximum attempts reached. Please contact support
    } else {
      attempts++;
      counter1Element.textContent = attempts;
      counter2Element.textContent = attempts;
      counter3Element.textContent = attempts;
      setTimeout(()=> {
        this.attemptAuthentication(attempts);
      }, 100);
    }
  }
}