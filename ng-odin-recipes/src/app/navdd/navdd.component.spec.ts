import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavddComponent } from './navdd.component';

describe('NavddComponent', () => {
  let component: NavddComponent;
  let fixture: ComponentFixture<NavddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
