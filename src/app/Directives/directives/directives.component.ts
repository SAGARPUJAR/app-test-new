import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css'],
})
export class DirectivesComponent {
  isUserCreated: boolean = false;
  isUserActive: string = '';
  userId: number = 10;

  constructor() {
    this.isUserActive = Math.random() > 0.5 ? 'online' : 'offiline';
  }

  createUser() {
    this.isUserCreated = true;
  }

  getUserStatus(){
    return this.isUserActive;
  }
}
