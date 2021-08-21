import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

export interface Icon {
  value:string,
  img:string
}

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  icons:Icon[]  = [ 
    { 'value':'firefox', 'img':'https://medes-doc.firebaseapp.com//assets/medes/icon-firefox.png' },
    { 'value':'chrome', 'img':'https://medes-doc.firebaseapp.com/assets/medes/icon-chrome.png'},
    { 'value':'opera', 'img':'https://medes-doc.firebaseapp.com/assets/medes/icon-opera.png'},
    { 'value':'edge', 'img':'https://medes-doc.firebaseapp.com/assets/medes/icon-edge.png'},
    { 'value':'facebook', 'img':'https://medes-doc.firebaseapp.com/assets/medes/icon-facebook.png'},
    { 'value':'instagram', 'img':'https://medes-doc.firebaseapp.com/assets/medes/icon-instagram.png'},
    { 'value':'mediadesain', 'img':'https://medes-doc.firebaseapp.com/assets/medes/icon-mds.png'},
    { 'value':'html', 'img':'https://medes-doc.firebaseapp.com/assets/medes/icon-html.png'},
    { 'value':'css', 'img':'https://medes-doc.firebaseapp.com/assets/medes/icon-css.png'},
    { 'value':'javascript', 'img':'https://medes-doc.firebaseapp.com/assets/medes/icon-js.png'},
    { 'value':'angularjs', 'img':'https://medes-doc.firebaseapp.com/assets/medes/icon-angularjs.png'}
  ]
  constructor(public navCtrl: NavController) {}

  doRefresh(event:any){
    setTimeout(() => {
      event.target.complete();
    }, 2000);
  }
}
