import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentProductosyserviciosComponent } from './content-productosyservicios.component';

describe('ContentProductosyserviciosComponent', () => {
  let component: ContentProductosyserviciosComponent;
  let fixture: ComponentFixture<ContentProductosyserviciosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContentProductosyserviciosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentProductosyserviciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
