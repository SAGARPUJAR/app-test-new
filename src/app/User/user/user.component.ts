import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent {
  name = 'SAGAR';
  Id: number = 10;
  isnewuserAllowed = false;
  isUserCreated = 'No Users Found';
  userName = '';
  twowayData: string = '';
  /**
   *
   */
  constructor() {
    setTimeout(() => {
      this.isnewuserAllowed = true;
    }, 3000);
  }

  getCreatedStatus() {
    this.isUserCreated = 'User Created Successfully';
  }

  updateData(event: Event) {
    this.userName = (event.target as HTMLInputElement).value;
  }
}
