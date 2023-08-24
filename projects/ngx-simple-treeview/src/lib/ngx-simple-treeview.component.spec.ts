import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxSimpleTreeviewComponent } from './ngx-simple-treeview.component';

describe('NgxSimpleTreeviewComponent', () => {
  let component: NgxSimpleTreeviewComponent;
  let fixture: ComponentFixture<NgxSimpleTreeviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgxSimpleTreeviewComponent]
    });
    fixture = TestBed.createComponent(NgxSimpleTreeviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
