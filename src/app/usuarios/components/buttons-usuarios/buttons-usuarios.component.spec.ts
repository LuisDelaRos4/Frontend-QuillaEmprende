import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonsUsuariosComponent } from './buttons-usuarios.component';

describe('ButtonsUsuariosComponent', () => {
  let component: ButtonsUsuariosComponent;
  let fixture: ComponentFixture<ButtonsUsuariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonsUsuariosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonsUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
