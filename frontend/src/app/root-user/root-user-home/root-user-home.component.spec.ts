import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RootUserHomeComponent } from './root-user-home.component';

describe('RootUserHomeComponent', () => {
  let component: RootUserHomeComponent;
  let fixture: ComponentFixture<RootUserHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RootUserHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RootUserHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
