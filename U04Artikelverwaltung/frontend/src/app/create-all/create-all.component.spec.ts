import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAllComponent } from './create-all.component';

describe('CreateAllComponent', () => {
  let component: CreateAllComponent;
  let fixture: ComponentFixture<CreateAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateAllComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
