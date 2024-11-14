import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonsAbonosComponent } from './buttons-abonos.component';

describe('ButtonsAbonosComponent', () => {
  let component: ButtonsAbonosComponent;
  let fixture: ComponentFixture<ButtonsAbonosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonsAbonosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonsAbonosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
