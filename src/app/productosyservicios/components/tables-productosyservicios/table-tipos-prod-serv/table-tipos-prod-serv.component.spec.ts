import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableTiposProdServComponent } from './table-tipos-prod-serv.component';

describe('TableTiposProdServComponent', () => {
  let component: TableTiposProdServComponent;
  let fixture: ComponentFixture<TableTiposProdServComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableTiposProdServComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableTiposProdServComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
