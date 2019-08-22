import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PAGECComponent } from './page-c.component';

describe('PAGECComponent', () => {
  let component: PAGECComponent;
  let fixture: ComponentFixture<PAGECComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PAGECComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PAGECComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
