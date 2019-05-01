import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelsComponentComponent } from './models-component.component';

describe('ModelsComponentComponent', () => {
  let component: ModelsComponentComponent;
  let fixture: ComponentFixture<ModelsComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModelsComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
