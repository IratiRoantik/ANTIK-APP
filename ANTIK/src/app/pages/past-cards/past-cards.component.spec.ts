import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PastCardsComponent } from './past-cards.component';

describe('PastCardsComponent', () => {
  let component: PastCardsComponent;
  let fixture: ComponentFixture<PastCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PastCardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PastCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
