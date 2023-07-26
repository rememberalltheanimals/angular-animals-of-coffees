import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoffeeDetailComponent } from './coffee-detail.component';

describe('CoffeeDetailComponent', () => {
  let component: CoffeeDetailComponent;
  let fixture: ComponentFixture<CoffeeDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoffeeDetailComponent]
    });
    fixture = TestBed.createComponent(CoffeeDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
