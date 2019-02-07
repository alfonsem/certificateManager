import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpCertificateViewComponent } from './up-certificate-view.component';

describe('UpCertificateViewComponent', () => {
  let component: UpCertificateViewComponent;
  let fixture: ComponentFixture<UpCertificateViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpCertificateViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpCertificateViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
