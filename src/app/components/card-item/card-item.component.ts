import { Component, OnInit } from '@angular/core';
import { ɵshimHostAttribute } from '@angular/platform-browser';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.css'],
})
export class CardItemComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}
  Property: any = {
    id: 1,
    name: 'Birla-house',
    type: 'House',
    price: 15000,
  };
}
