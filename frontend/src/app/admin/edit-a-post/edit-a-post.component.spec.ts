import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAPostComponent } from './edit-a-post.component';

describe('EditAPostComponent', () => {
  let component: EditAPostComponent;
  let fixture: ComponentFixture<EditAPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditAPostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditAPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
