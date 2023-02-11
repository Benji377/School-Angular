import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtikelFormComponent } from './artikel-form.component';

describe('ArtikelFormComponent', () => {
  let component: ArtikelFormComponent;
  let fixture: ComponentFixture<ArtikelFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtikelFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtikelFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
