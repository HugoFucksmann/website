import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderDosComponent } from './header-dos.component';

describe('HeaderDosComponent', () => {
  let component: HeaderDosComponent;
  let fixture: ComponentFixture<HeaderDosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderDosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderDosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
