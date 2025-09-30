import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IgTemplatesComponent } from './ig-templates.component';

describe('IgTemplatesComponent', () => {
  let component: IgTemplatesComponent;
  let fixture: ComponentFixture<IgTemplatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IgTemplatesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IgTemplatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
