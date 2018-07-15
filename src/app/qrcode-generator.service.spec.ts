import { TestBed, inject } from '@angular/core/testing';

import { QRCodeGeneratorService } from './qrcode-generator.service';

describe('QRCodeGeneratorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QRCodeGeneratorService]
    });
  });

  it('should be created', inject([QRCodeGeneratorService], (service: QRCodeGeneratorService) => {
    expect(service).toBeTruthy();
  }));
});
