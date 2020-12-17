import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBenutzerComponent } from './edit-benutzer.component';

describe('EditBenutzerComponent', () => {
  let component: EditBenutzerComponent;
  let fixture: ComponentFixture<EditBenutzerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditBenutzerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditBenutzerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
