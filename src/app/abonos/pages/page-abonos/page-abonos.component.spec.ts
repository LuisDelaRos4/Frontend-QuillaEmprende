import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAbonosComponent } from './page-abonos.component';

describe('PageAbonosComponent', () => {
  let component: PageAbonosComponent;
  let fixture: ComponentFixture<PageAbonosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageAbonosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageAbonosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
