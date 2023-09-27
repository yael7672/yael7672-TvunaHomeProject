import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPersonalDetailsComponent } from './my-personal-details.component';

describe('MyPersonalDetailsComponent', () => {
  let component: MyPersonalDetailsComponent;
  let fixture: ComponentFixture<MyPersonalDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyPersonalDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyPersonalDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
