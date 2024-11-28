import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableProductosServiciosComponent } from './table-productos-servicios.component';

describe('TableProductosServiciosComponent', () => {
  let component: TableProductosServiciosComponent;
  let fixture: ComponentFixture<TableProductosServiciosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableProductosServiciosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableProductosServiciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
