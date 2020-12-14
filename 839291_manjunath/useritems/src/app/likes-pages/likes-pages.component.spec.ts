import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LikesPagesComponent } from './likes-pages.component';

describe('LikesPagesComponent', () => {
  let component: LikesPagesComponent;
  let fixture: ComponentFixture<LikesPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LikesPagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LikesPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
