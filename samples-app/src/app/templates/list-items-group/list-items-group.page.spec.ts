import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListItemsGroupPage } from './list-items-group.page';

describe('ListItemsGroupPage', () => {
  let component: ListItemsGroupPage;
  let fixture: ComponentFixture<ListItemsGroupPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListItemsGroupPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListItemsGroupPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
