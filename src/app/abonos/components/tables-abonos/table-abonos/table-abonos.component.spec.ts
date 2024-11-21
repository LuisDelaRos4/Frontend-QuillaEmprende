import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableAbonosComponent } from './table-abonos.component';

describe('TableAbonosComponent', () => {
  let component: TableAbonosComponent;
  let fixture: ComponentFixture<TableAbonosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableAbonosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableAbonosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
