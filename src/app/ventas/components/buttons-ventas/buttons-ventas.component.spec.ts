import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonsVentasComponent } from './buttons-ventas.component';

describe('ButtonsVentasComponent', () => {
  let component: ButtonsVentasComponent;
  let fixture: ComponentFixture<ButtonsVentasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonsVentasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonsVentasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
