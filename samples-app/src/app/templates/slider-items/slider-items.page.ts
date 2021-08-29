import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider-items',
  templateUrl: './slider-items.page.html',
  styleUrls: ['./slider-items.page.scss'],
})
export class SliderItemsPage implements OnInit {
  sliderStyle = 'slider-style-square';
  sliderSize = 'slider-size-2';
  sliderRadius = 'mds-radius-1';

  constructor() { }

  ngOnInit() {
  }

}
