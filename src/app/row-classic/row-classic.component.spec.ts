import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RowClassicComponent } from './row-classic.component';

describe('RowClassicComponent', () => {
	let component: RowClassicComponent;
	let fixture: ComponentFixture<RowClassicComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [ RowClassicComponent ]
		})
		.compileComponents();

		fixture = TestBed.createComponent(RowClassicComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

});
