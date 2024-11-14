import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageProductosyserviciosComponent } from './page-productosyservicios.component';

describe('PageProductosyserviciosComponent', () => {
  let component: PageProductosyserviciosComponent;
  let fixture: ComponentFixture<PageProductosyserviciosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageProductosyserviciosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageProductosyserviciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
