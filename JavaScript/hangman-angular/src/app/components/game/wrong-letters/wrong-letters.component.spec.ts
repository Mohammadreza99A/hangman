import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WrongLettersComponent } from './wrong-letters.component';

describe('WrongLettersComponent', () => {
  let component: WrongLettersComponent;
  let fixture: ComponentFixture<WrongLettersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WrongLettersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrongLettersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
