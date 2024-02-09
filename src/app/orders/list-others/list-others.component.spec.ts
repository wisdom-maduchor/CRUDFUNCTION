import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOthersComponent } from './list-others.component';

describe('ListOthersComponent', () => {
  let component: ListOthersComponent;
  let fixture: ComponentFixture<ListOthersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListOthersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListOthersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
