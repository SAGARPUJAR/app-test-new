import { Component } from '@angular/core';

@Component({
  selector: 'app-attribute-directives',
  templateUrl: './attribute-directives.component.html',
  styleUrls: ['./attribute-directives.component.css'],
})
export class AttributeDirectivesComponent {
  isUserActive: string = '';
  userId: number = 10;

  constructor() {
    this.isUserActive = Math.random() > 0.5 ? 'online' : 'offiline';
  }

  getUserStatus() {
    return this.isUserActive;
  }

  getColor() {
    if (this.isUserActive == 'online') {
      return 'green';
    }
    return 'red';
  }
}
