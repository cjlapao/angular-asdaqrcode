import { QRCodeGeneratorService } from './../qrcode-generator.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-qrcode',
  templateUrl: './qrcode.component.html',
  styleUrls: ['./qrcode.component.css']
})
export class QrcodeComponent implements OnInit {
  now: string;

  constructor(private qrCodeGenerator: QRCodeGeneratorService) { }

  ngOnInit() {
    this.now = this.qrCodeGenerator.getDateNow();
    this.qrCodeGenerator.generate();
  }

  onGenerate(): void {
    this.now = this.qrCodeGenerator.getDateNow();
    this.qrCodeGenerator.generate();
  }
}
