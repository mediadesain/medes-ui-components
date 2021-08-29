import { Component, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'segment-slider.page.html'
})
export class SegmentSliderPage {

  constructor() {}

  // -- SegmentTab Support Swap Gesture --//
  @ViewChild('slides', { static: true }) slider: IonSlides;
  segment = 0;
  async segmentChanged() { await this.slider.slideTo(this.segment); }
  async slideChanged() { this.segment = await this.slider.getActiveIndex(); }

  doRefresh(event: any){
    setTimeout(() => {
      console.log('Refresh Done');
      event.target.complete();
    }, 2000);
  }

}
