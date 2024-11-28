import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableCategoriasProdServComponent } from './table-categorias-prod-serv.component';

describe('TableCategoriasProdServComponent', () => {
  let component: TableCategoriasProdServComponent;
  let fixture: ComponentFixture<TableCategoriasProdServComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableCategoriasProdServComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableCategoriasProdServComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
