import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MySaveCardsComponent } from './my-save-cards.component';

describe('MySaveCardsComponent', () => {
  let component: MySaveCardsComponent;
  let fixture: ComponentFixture<MySaveCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MySaveCardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MySaveCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
