import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BinaryResultComponent } from './binary-result.component';

describe('BinaryResultComponent', () => {
  let component: BinaryResultComponent;
  let fixture: ComponentFixture<BinaryResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BinaryResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BinaryResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
