import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mds-ui-components',
  templateUrl: './mds-ui-components.page.html'
})
export class MdsUiComponentsPage implements OnInit {
  icons = [ { value: 'firefox', img: 'https://medes-doc.firebaseapp.com//assets/medes/icon-firefox.png' }, { value: 'chrome', img: 'https://medes-doc.firebaseapp.com/assets/medes/icon-chrome.png'}, { value: 'opera', img: 'https://medes-doc.firebaseapp.com/assets/medes/icon-opera.png'}, { value: 'edge', img: 'https://medes-doc.firebaseapp.com/assets/medes/icon-edge.png'}, { value: 'facebook', img: 'https://medes-doc.firebaseapp.com/assets/medes/icon-facebook.png'}, { value: 'instagram', img: 'https://medes-doc.firebaseapp.com/assets/medes/icon-instagram.png'}, { value: 'mediadesain', img: 'https://medes-doc.firebaseapp.com/assets/medes/icon-mds.png'}, { value: 'html', img: 'https://medes-doc.firebaseapp.com/assets/medes/icon-html.png'}, { value: 'css', img: 'https://medes-doc.firebaseapp.com/assets/medes/icon-css.png'}, { value: 'javascript', img: 'https://medes-doc.firebaseapp.com/assets/medes/icon-js.png'}, { value: 'angularjs', img: 'https://medes-doc.firebaseapp.com/assets/medes/icon-angularjs.png'} ];
  iconStyle = 'icon-size-2';
  checkedStyle = 'icon-checked-mark';
  radiofix: string;

  constructor() { }

  ngOnInit() {
  }


}
