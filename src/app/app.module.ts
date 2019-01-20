import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { QrcodeComponent } from './qrcode/qrcode.component';

@NgModule({
  declarations: [
    AppComponent,
    QrcodeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
