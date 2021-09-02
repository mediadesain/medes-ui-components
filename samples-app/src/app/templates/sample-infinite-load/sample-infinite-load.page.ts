import { Component, OnInit } from '@angular/core';
import { SampleInfiniteLoadService } from './sample-infinite-load.page.service';

@Component({
  selector: 'app-sample-infinite-load',
  templateUrl: './sample-infinite-load.page.html',
  styleUrls: ['./sample-infinite-load.page.scss'],
})
export class SampleInfiniteLoadPage implements OnInit {

  constructor(
    public infiniteService : SampleInfiniteLoadService
  ) { }

  ngOnInit() {
    if (this.infiniteService.data.length === 0){
      this.infiniteService.getData();
    }
  }

  loadData(event) {
    setTimeout(() => {
      event.target.complete();
      this.infiniteService.loadMore();
    }, 500);
  }

}
