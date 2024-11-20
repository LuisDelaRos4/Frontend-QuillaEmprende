import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableModulosComponent } from './table-modulos.component';

describe('TableModulosComponent', () => {
  let component: TableModulosComponent;
  let fixture: ComponentFixture<TableModulosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableModulosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableModulosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
