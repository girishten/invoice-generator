import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IgGetStartedComponent } from './ig-get-started.component';

describe('IgGetStartedComponent', () => {
  let component: IgGetStartedComponent;
  let fixture: ComponentFixture<IgGetStartedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IgGetStartedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IgGetStartedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
