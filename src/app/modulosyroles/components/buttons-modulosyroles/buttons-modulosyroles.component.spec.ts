import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonsModulosyrolesComponent } from './buttons-modulosyroles.component';

describe('ButtonsModulosyrolesComponent', () => {
  let component: ButtonsModulosyrolesComponent;
  let fixture: ComponentFixture<ButtonsModulosyrolesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonsModulosyrolesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonsModulosyrolesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
