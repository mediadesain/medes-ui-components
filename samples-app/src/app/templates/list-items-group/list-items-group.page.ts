import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-items-group',
  templateUrl: './list-items-group.page.html',
  styleUrls: ['./list-items-group.page.scss'],
})
export class ListItemsGroupPage implements OnInit {
  groupRadius:string = 'mds-radius-2';
  showShadow:string = 'mds-shadow';
  constructor() { }

  ngOnInit() {
  }

}
