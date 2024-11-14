import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentUsuariosComponent } from './content-usuarios.component';

describe('ContentUsuariosComponent', () => {
  let component: ContentUsuariosComponent;
  let fixture: ComponentFixture<ContentUsuariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContentUsuariosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
