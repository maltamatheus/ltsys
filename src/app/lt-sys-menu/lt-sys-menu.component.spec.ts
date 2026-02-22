import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LtSysMenuComponent } from './lt-sys-menu.component';

describe('LtSysMenuComponent', () => {
  let component: LtSysMenuComponent;
  let fixture: ComponentFixture<LtSysMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LtSysMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LtSysMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
