import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AngJsoneditorModule } from '@maaxgr/ang-jsoneditor';
import { JsonAppEditorComponent } from './components/json-editor/json-editor.component';
import { ActionsComponent } from './components/actions/actions.component';
@NgModule({
  declarations: [AppComponent, JsonAppEditorComponent, ActionsComponent],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    AppRoutingModule,
    AngJsoneditorModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
