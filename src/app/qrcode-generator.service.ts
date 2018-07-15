import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class QRCodeGeneratorService {
  prefix: string;
  store: string[];

  constructor() {
    this.prefix = 'ASDX';
    this.store = ['2477'];
  }

  private generateJulianDay(): number {
    let now, start: any;
    now = new Date();
    start = new Date(now.getFullYear(), 0, 0);
    const diff = (now - start) + ((start.getTimezoneOffset() - now.getTimezoneOffset()) * 60 * 1000);
    const oneDay = 1000 * 60 * 60 * 24;
    const day = Math.floor(diff / oneDay);
    return day;
  }

  private generateAsdaYear(): string {
    const now = new Date();
    const year = now.getFullYear().toString();
    return year[3];
  }

  private generateTime(): string {
    const now = new Date();
    let hour = now.getHours().toString();
    let min = now.getMinutes().toString();
    let sec = now.getSeconds().toString();
    if (hour.length === 1) {
      hour = '0' + hour;
    }
    if (min.length === 1) {
      min = '0' + min;
    }
    if (sec.length === 1) {
      sec = '0' + sec;
    }
    return hour + min + sec;
  }

  public getDateNow(): string {
    const now = new Date();
    const year = now.getFullYear().toString();
    let month = (now.getMonth() + 1).toString();
    let day = now.getDate().toString();
    let hour = now.getHours().toString();
    let min = now.getMinutes().toString();
    let sec = now.getSeconds().toString();
    if (month.length === 1) {
      month = '0' + month;
    }
    if (day.length === 1) {
      day = '0' + day;
    }
    if (hour.length === 1) {
      hour = '0' + hour;
    }
    if (min.length === 1) {
      min = '0' + min;
    }
    if (sec.length === 1) {
      sec = '0' + sec;
    }
    return day + '/' + month + '/' + year + ' ' + hour + ':' + min + ':' + sec;
  }

  generate(): void {
    const container = $('#qrContainer');
    container.html('');
    const code = this.prefix + this.store[0] +
      this.generateAsdaYear() +
      this.generateJulianDay() +
      this.generateTime();
    const qrcode = new QRCode(container[0], code);
  }
}
