import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContadorComponentComponent } from './contador-component.component';

describe('ContadorComponentComponent', () => {
  let component: ContadorComponentComponent;
  let fixture: ComponentFixture<ContadorComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContadorComponentComponent]
    });
    fixture = TestBed.createComponent(ContadorComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
