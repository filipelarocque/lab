import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = "Topics";
  topics = [
    "Angular modules",
    "Basic component",
    "Declarations",
    "Dependency injecton",
    "Directives",
    "Providers",
    "Service"
  ];
}
