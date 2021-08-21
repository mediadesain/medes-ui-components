import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider-items',
  templateUrl: './slider-items.page.html',
  styleUrls: ['./slider-items.page.scss'],
})
export class SliderItemsPage implements OnInit {
  sliderStyle:string = 'slider-style-square';
  sliderSize:string = 'slider-size-2';
  sliderRadius:string = 'mds-radius-1';
  
  constructor() { }

  ngOnInit() {
  }

}
