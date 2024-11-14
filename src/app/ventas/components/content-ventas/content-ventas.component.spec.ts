import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentVentasComponent } from './content-ventas.component';

describe('ContentVentasComponent', () => {
  let component: ContentVentasComponent;
  let fixture: ComponentFixture<ContentVentasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContentVentasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentVentasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
