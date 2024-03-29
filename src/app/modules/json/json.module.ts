import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JsonAppEditorComponent } from './pages';
import { JsonRoutingModule } from './json-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ActionsComponent } from './components';

@NgModule({
  imports: [CommonModule, JsonRoutingModule, SharedModule],
  declarations: [JsonAppEditorComponent, ActionsComponent],
})
export class JsonModule {}
