import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoacheesComponent } from './coachees.component';

describe('CoacheesComponent', () => {
  let component: CoacheesComponent;
  let fixture: ComponentFixture<CoacheesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoacheesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoacheesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
