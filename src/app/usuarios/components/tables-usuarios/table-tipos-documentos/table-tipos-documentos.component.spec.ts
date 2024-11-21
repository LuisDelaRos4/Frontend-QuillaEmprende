import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableTiposDocumentosComponent } from './table-tipos-documentos.component';

describe('TableTiposDocumentosComponent', () => {
  let component: TableTiposDocumentosComponent;
  let fixture: ComponentFixture<TableTiposDocumentosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableTiposDocumentosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableTiposDocumentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
