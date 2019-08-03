import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {
  @Input('content') content: string;
  @Input('isActive') isActive: boolean;
  @Input('likesCount') likesCount: number;

  constructor() { }

  ngOnInit() {
  }

  toggleLike() {
    this.isActive = !this.isActive;
    this.likesCount += this.isActive ? +1 : -1;
  }

}
