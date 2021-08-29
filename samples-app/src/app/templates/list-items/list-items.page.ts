import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.page.html',
  styleUrls: ['./list-items.page.scss'],
})
export class ListItemsPage implements OnInit {
  itemRadius = 'mds-radius-2';
  imgShape = 'square';
  imgRadius = 'mds-radius-2';
  constructor() { }

  ngOnInit() {
  }

  changeImgLoader(val: string){
    if (val === 'circle') {
      this.imgRadius = '';
    }
  }

}
