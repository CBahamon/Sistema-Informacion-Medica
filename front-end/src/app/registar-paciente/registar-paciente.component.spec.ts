import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistarPacienteComponent } from './registar-paciente.component';

describe('RegistarPacienteComponent', () => {
  let component: RegistarPacienteComponent;
  let fixture: ComponentFixture<RegistarPacienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistarPacienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistarPacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
