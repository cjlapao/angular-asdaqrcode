import { QRCodeGeneratorService } from './../qrcode-generator.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-qrcode',
  templateUrl: './qrcode.component.html',
  styleUrls: ['./qrcode.component.css']
})

export class QrcodeComponent implements OnInit {
  now: string;
  stores: string[];
  code: string;

  constructor(private qrCodeGenerator: QRCodeGeneratorService) { }

  ngOnInit() {
    this.stores = this.qrCodeGenerator.stores;
    this.qrCodeGenerator.generate();
    this.now = this.qrCodeGenerator.getDateNow();
    this.code = this.qrCodeGenerator.generatedString;
  }

  onGenerate(): void {
    this.qrCodeGenerator.generate();
    this.now = this.qrCodeGenerator.getDateNow();
    this.code = this.qrCodeGenerator.generatedString;
  }
}
