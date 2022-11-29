import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonItemComponentComponent } from './person-item-component.component';

describe('PersonItemComponentComponent', () => {
  let component: PersonItemComponentComponent;
  let fixture: ComponentFixture<PersonItemComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonItemComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonItemComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
