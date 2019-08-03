import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
  isFavorite: boolean;
  iconPrefix: String;
  
  constructor() {
    this.selectIconPrefix();
  }

  ngOnInit() {
  }

  toggleFavorite() {
    this.isFavorite = !this.isFavorite;
    this.selectIconPrefix();
  }

  selectIconPrefix() {
    this.iconPrefix = this.isFavorite ? "fas" : "far";
  }
}
