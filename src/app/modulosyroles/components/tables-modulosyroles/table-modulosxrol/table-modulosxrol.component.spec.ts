import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableModulosxrolComponent } from './table-modulosxrol.component';

describe('TableModulosxrolComponent', () => {
  let component: TableModulosxrolComponent;
  let fixture: ComponentFixture<TableModulosxrolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableModulosxrolComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableModulosxrolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
