import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadUserPostsComponent } from './read-user-posts.component';

describe('ReadUserPostsComponent', () => {
  let component: ReadUserPostsComponent;
  let fixture: ComponentFixture<ReadUserPostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadUserPostsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReadUserPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
