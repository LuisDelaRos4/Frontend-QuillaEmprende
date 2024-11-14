import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageModulosyrolesComponent } from './page-modulosyroles.component';

describe('PageModulosyrolesComponent', () => {
  let component: PageModulosyrolesComponent;
  let fixture: ComponentFixture<PageModulosyrolesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageModulosyrolesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageModulosyrolesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
