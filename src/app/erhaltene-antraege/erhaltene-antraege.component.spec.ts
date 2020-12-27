import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErhalteneAntraegeComponent } from './erhaltene-antraege.component';

describe('ErhalteneAntraegeComponent', () => {
  let component: ErhalteneAntraegeComponent;
  let fixture: ComponentFixture<ErhalteneAntraegeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErhalteneAntraegeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ErhalteneAntraegeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
