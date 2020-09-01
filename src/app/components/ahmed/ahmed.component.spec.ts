import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AhmedComponent } from './ahmed.component';

describe('AhmedComponent', () => {
  let component: AhmedComponent;
  let fixture: ComponentFixture<AhmedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AhmedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AhmedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
