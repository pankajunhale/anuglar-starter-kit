import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BootstrapDropdownComponent } from './bootstrap-dropdown.component';

describe('BootstrapDropdownComponent', () => {
  let component: BootstrapDropdownComponent;
  let fixture: ComponentFixture<BootstrapDropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BootstrapDropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BootstrapDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
