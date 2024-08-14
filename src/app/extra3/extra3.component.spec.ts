import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Extra3Component } from './extra3.component';

describe('Extra3Component', () => {
  let component: Extra3Component;
  let fixture: ComponentFixture<Extra3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Extra3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Extra3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
