import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadPostByCategoryComponent } from './read-post-by-category.component';

describe('ReadPostByCategoryComponent', () => {
  let component: ReadPostByCategoryComponent;
  let fixture: ComponentFixture<ReadPostByCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadPostByCategoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReadPostByCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
