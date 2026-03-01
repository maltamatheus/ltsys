import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaInteressadosComponent } from './consulta-interessados.component';

describe('ConsultaInteressadosComponent', () => {
  let component: ConsultaInteressadosComponent;
  let fixture: ComponentFixture<ConsultaInteressadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultaInteressadosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultaInteressadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
