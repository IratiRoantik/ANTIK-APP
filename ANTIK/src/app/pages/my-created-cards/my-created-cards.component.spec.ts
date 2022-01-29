import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCreatedCardsComponent } from './my-created-cards.component';

describe('MyCreatedCardsComponent', () => {
  let component: MyCreatedCardsComponent;
  let fixture: ComponentFixture<MyCreatedCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyCreatedCardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyCreatedCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
