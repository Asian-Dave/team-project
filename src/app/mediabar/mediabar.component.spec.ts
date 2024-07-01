import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediabarComponent } from './mediabar.component';

describe('MediabarComponent', () => {
  let component: MediabarComponent;
  let fixture: ComponentFixture<MediabarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MediabarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MediabarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
