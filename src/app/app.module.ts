import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngJsoneditorModule } from '@maaxgr/ang-jsoneditor'
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngJsoneditorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }