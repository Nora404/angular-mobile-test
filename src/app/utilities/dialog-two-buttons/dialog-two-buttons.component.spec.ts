import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogTwoButtonsComponent } from './dialog-two-buttons.component';

describe('DialogTwoButtonsComponent', () => {
  let component: DialogTwoButtonsComponent;
  let fixture: ComponentFixture<DialogTwoButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogTwoButtonsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogTwoButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
