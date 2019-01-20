import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class QRCodeGeneratorService {
  prefix: string;
  public stores: string[];
  public generatedString: string;

  constructor() {
    this.prefix = 'ASDX';
    this.stores = ['2477', '2484', '2188'];
  }

  private generateJulianDay(day: any, month: any, year: any): string {
    let now: any, start: any;
    now = new Date();
    if (day.toLowerCase() !== 'now') {
      now.setDate(day);
    }
    if (month.toLowerCase() !== 'now') {
      now.setMonth(month - 1);
    }
    if (year.toLowerCase() !== 'now') {
      now.setFullYear(year);
    }
    start = new Date(now.getFullYear(), 0, 0);
    const diff = (now - start) + ((start.getTimezoneOffset() - now.getTimezoneOffset()) * 60 * 1000);
    const oneDay = 1000 * 60 * 60 * 24;
    const newDay = Math.floor(diff / oneDay);
    let dayStr: string;
    dayStr = newDay.toString();
    if (dayStr.length < 3) {
      dayStr = '0' + dayStr;
    }
    return dayStr;
  }

  private generateAsdaYear(year: any): string {
    const now = new Date();
    if (year.toLowerCase() !== 'now') {
      now.setFullYear(year);
    }
    const yearResult = now.getFullYear().toString();
    return yearResult[3];
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
    let day: string;
    let month: string;
    let year: string;
    let storeId: string;
    let code: string;
    const container = $('#qrContainer');
    const storeIdIndex = this.getRandomInt(0, this.stores.length - 1);
    const storeIn = $('#storeId');

    day = $('#day').val() as string;
    month = $('#month').val() as string;
    year = $('#year').val() as string;
    container.html('');

    storeId = (storeIn.val() as string).toLowerCase();
    if (storeId === 'random') {
      storeId = this.stores[storeIdIndex];
      if (storeId === undefined) {
        storeId = this.stores[0];
      }
    }

    code = this.prefix + storeId +
      this.generateAsdaYear(year) +
      this.generateJulianDay(day, month, year) +
      this.generateTime();

      const qrcode = new QRCode(container[0], code);

      this.generatedString = code;
  }

  getRandomInt(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
