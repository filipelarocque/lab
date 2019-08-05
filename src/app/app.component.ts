import { Component } from '@angular/core';

// Services
import { FactsService } from './services/facts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  providers: [FactsService]
})
export class AppComponent {
  
  constructor() {

  }

}
