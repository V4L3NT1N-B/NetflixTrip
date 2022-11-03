import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardTop10Component } from './card-top10.component';

describe('CardTop10Component', () => {
  let component: CardTop10Component;
  let fixture: ComponentFixture<CardTop10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardTop10Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardTop10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
