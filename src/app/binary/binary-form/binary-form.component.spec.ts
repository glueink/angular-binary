import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BinaryFormComponent } from './binary-form.component';

describe('BinaryFormComponent', () => {
  let component: BinaryFormComponent;
  let fixture: ComponentFixture<BinaryFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BinaryFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BinaryFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
