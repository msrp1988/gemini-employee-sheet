import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PAGEAComponent } from './page-a.component';

describe('PAGEAComponent', () => {
  let component: PAGEAComponent;
  let fixture: ComponentFixture<PAGEAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PAGEAComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PAGEAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
