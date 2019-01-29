import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarBoardComponent } from './nav-bar-board.component';

describe('NavBarBoardComponent', () => {
  let component: NavBarBoardComponent;
  let fixture: ComponentFixture<NavBarBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavBarBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBarBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
