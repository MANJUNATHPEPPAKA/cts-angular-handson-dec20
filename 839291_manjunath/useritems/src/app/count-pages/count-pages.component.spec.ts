import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountPagesComponent } from './count-pages.component';

describe('CountPagesComponent', () => {
  let component: CountPagesComponent;
  let fixture: ComponentFixture<CountPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountPagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
