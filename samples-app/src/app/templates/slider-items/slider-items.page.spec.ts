import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SliderItemsPage } from './slider-items.page';

describe('SliderItemsPage', () => {
  let component: SliderItemsPage;
  let fixture: ComponentFixture<SliderItemsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SliderItemsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SliderItemsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
