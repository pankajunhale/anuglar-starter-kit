import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxWidgetComponent } from './checkbox-widget.component';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from "@angular/core";

describe('CheckboxWidgetComponent', () => {
  let component: CheckboxWidgetComponent;
  let fixture: ComponentFixture<CheckboxWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckboxWidgetComponent ],
      schemas:[CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckboxWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
