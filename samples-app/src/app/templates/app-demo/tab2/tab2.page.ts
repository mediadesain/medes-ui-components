import { Component, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor() {}

  //-- SegmentTab Support Swap Gesture --//
  @ViewChild('slides', { static: true }) slider: IonSlides;
  segment = 0;
  async segmentChanged() { await this.slider.slideTo(this.segment) }
  async slideChanged() { this.segment = await this.slider.getActiveIndex() }

  doRefresh(event:any){
    setTimeout(() => {
      event.target.complete();
    }, 2000);
  }

}
