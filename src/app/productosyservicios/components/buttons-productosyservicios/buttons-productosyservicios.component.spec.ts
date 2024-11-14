import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonsProductosyserviciosComponent } from './buttons-productosyservicios.component';

describe('ButtonsProductosyserviciosComponent', () => {
  let component: ButtonsProductosyserviciosComponent;
  let fixture: ComponentFixture<ButtonsProductosyserviciosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonsProductosyserviciosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonsProductosyserviciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
