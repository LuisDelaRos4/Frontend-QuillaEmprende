import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentAbonosComponent } from './content-abonos.component';

describe('ContentAbonosComponent', () => {
  let component: ContentAbonosComponent;
  let fixture: ComponentFixture<ContentAbonosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContentAbonosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentAbonosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
