import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadMorePostComponent } from './read-more-post.component';

describe('ReadMorePostComponent', () => {
  let component: ReadMorePostComponent;
  let fixture: ComponentFixture<ReadMorePostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadMorePostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReadMorePostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
