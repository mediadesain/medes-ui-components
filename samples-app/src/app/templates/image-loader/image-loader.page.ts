import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-loader',
  templateUrl: './image-loader.page.html',
  styleUrls: ['./image-loader.page.scss'],
})
export class ImageLoaderPage implements OnInit {

  imgLoaderStyle:string = 'landscape';
  imgLoaderBorder:string = '';
  constructor() { }

  ngOnInit() {
  }

  changeImgLoader(val:string){
    if(val === 'circle')
      this.imgLoaderBorder = ''
  }

}
