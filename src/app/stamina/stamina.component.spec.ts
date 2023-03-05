import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaminaComponent } from './stamina.component';

describe('StaminaComponent', () => {
  let component: StaminaComponent;
  let fixture: ComponentFixture<StaminaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaminaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StaminaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
