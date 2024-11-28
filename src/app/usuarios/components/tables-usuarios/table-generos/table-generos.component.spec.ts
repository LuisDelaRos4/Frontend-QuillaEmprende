import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableGenerosComponent } from './table-generos.component';

describe('TableGenerosComponent', () => {
  let component: TableGenerosComponent;
  let fixture: ComponentFixture<TableGenerosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableGenerosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableGenerosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
