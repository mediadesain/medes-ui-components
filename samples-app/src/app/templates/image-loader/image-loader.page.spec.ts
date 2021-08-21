import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ImageLoaderPage } from './image-loader.page';

describe('ImageLoaderPage', () => {
  let component: ImageLoaderPage;
  let fixture: ComponentFixture<ImageLoaderPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageLoaderPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ImageLoaderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
