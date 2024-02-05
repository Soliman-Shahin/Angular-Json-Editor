import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StyleRoutingModule } from './style-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { StyleEditorComponent } from './pages';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, StyleRoutingModule, FormsModule, SharedModule],
  declarations: [StyleEditorComponent],
})
export class StyleModule {}
