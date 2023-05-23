import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Registration Form';
  
  displayName = '';
  displayAddress = '';
  dispayContact = '';
  displayEmail = '';

  getData(name:string, address: string, contact: string, email: string) {
    this.displayName = name;
    this.displayAddress = address;
    this.dispayContact = contact;
    this.displayEmail = email
  }
}
