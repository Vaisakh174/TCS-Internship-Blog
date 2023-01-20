import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostABlogComponent } from './post-a-blog.component';

describe('PostABlogComponent', () => {
  let component: PostABlogComponent;
  let fixture: ComponentFixture<PostABlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostABlogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostABlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
