import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SampleInfiniteLoadPage } from './sample-infinite-load.page';

describe('SampleInfiniteLoadPage', () => {
  let component: SampleInfiniteLoadPage;
  let fixture: ComponentFixture<SampleInfiniteLoadPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SampleInfiniteLoadPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SampleInfiniteLoadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
