import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuCrudComponent } from './menu-crud.component';

describe('MenuCrudComponent', () => {
  let component: MenuCrudComponent;
  let fixture: ComponentFixture<MenuCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuCrudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
