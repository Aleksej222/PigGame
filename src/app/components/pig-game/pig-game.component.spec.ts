import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PigGameComponent } from './pig-game.component';

describe('PigGameComponent', () => {
  let component: PigGameComponent;
  let fixture: ComponentFixture<PigGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PigGameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PigGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
