import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-items-group',
  templateUrl: './list-items-group.page.html',
  styleUrls: ['./list-items-group.page.scss'],
})
export class ListItemsGroupPage implements OnInit {
  groupRadius = 'mds-radius-2';
  showShadow = 'mds-shadow';
  constructor() { }

  ngOnInit() {
  }

}
