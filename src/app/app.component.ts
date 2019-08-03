import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'Topics';
  topics = [
    "Property binding",
    "Event binding",
    "Font Awesome icons"
  ];
}
