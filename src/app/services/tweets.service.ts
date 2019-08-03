import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TweetsService {

  constructor() { }

  getTweet() {
    return {
      content: "Some flaming content...",
      isLiked: true,
      likesCount: 13287
    };
  }

}
