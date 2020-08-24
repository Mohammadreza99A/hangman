import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EndGameModalComponent } from './end-game-modal.component';

describe('EndGameModalComponent', () => {
  let component: EndGameModalComponent;
  let fixture: ComponentFixture<EndGameModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EndGameModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EndGameModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
