import { TestBed } from '@angular/core/testing';

import { NgxSimpleTreeviewService } from './ngx-simple-treeview.service';

describe('NgxSimpleTreeviewService', () => {
  let service: NgxSimpleTreeviewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxSimpleTreeviewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
