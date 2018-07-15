import { QRCodeGeneratorService } from './../qrcode-generator.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-qrcode',
  templateUrl: './qrcode.component.html',
  styleUrls: ['./qrcode.component.css']
})
export class QrcodeComponent implements OnInit {

  constructor(private qrCodeGenerator: QRCodeGeneratorService) { }

  ngOnInit() {
  }

  onGenerate(): void {
    this.qrCodeGenerator.generate();
  }
}
