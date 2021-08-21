import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IonCardSliderPage } from './ion-card-slider.page';

describe('IonCardSliderPage', () => {
  let component: IonCardSliderPage;
  let fixture: ComponentFixture<IonCardSliderPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IonCardSliderPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IonCardSliderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
