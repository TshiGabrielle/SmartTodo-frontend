import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContextList } from './context-list';

describe('ContextList', () => {
  let component: ContextList;
  let fixture: ComponentFixture<ContextList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContextList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContextList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
