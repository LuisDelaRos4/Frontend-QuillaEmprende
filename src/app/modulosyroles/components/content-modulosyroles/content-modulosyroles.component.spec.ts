import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentModulosyrolesComponent } from './content-modulosyroles.component';

describe('ContentModulosyrolesComponent', () => {
  let component: ContentModulosyrolesComponent;
  let fixture: ComponentFixture<ContentModulosyrolesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContentModulosyrolesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentModulosyrolesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
