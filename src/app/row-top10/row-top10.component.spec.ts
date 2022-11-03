import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RowTop10Component } from './row-top10.component';

describe('RowTop10Component', () => {
  let component: RowTop10Component;
  let fixture: ComponentFixture<RowTop10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RowTop10Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RowTop10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
