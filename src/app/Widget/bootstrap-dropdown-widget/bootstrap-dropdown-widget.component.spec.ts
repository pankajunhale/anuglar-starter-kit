import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BootstrapDropdownWidgetComponent } from './bootstrap-dropdown-widget.component';

describe('BootstrapDropdownWidgetComponent', () => {
  let component: BootstrapDropdownWidgetComponent;
  let fixture: ComponentFixture<BootstrapDropdownWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BootstrapDropdownWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BootstrapDropdownWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
