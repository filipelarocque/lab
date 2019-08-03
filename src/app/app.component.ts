import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'Topics';
  topics = [
    "Reusable components",
    "Inputs",
    "Outputs",
    "Class binding"
  ]
}
