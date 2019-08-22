import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PAGEBComponent } from './page-b.component';

describe('PAGEBComponent', () => {
  let component: PAGEBComponent;
  let fixture: ComponentFixture<PAGEBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PAGEBComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PAGEBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
