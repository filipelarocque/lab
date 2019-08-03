import { Component } from '@angular/core';

import { TweetsService } from './services/tweets.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  providers: [
    TweetsService
  ]
})
export class AppComponent {
  title = 'Topics';
  topics = [
    "Reusable components",
    "Inputs",
    "Outputs",
    "Class binding"
  ];
  tweet;

  constructor(tweetsService: TweetsService) {
    this.tweet = tweetsService.getTweet();
  }
  
}
