import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesSlideComponent } from './categories-slide.component';

describe('CategoriesSlideComponent', () => {
  let component: CategoriesSlideComponent;
  let fixture: ComponentFixture<CategoriesSlideComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CategoriesSlideComponent]
    });
    fixture = TestBed.createComponent(CategoriesSlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
