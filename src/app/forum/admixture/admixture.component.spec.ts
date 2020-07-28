import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmixtureComponent } from './admixture.component';

describe('AdmixtureComponent', () => {
  let component: AdmixtureComponent;
  let fixture: ComponentFixture<AdmixtureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmixtureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmixtureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
