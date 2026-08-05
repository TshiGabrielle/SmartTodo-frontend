import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContextForm } from './context-form';

describe('ContextForm', () => {
  let component: ContextForm;
  let fixture: ComponentFixture<ContextForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContextForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContextForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
