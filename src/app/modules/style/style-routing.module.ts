import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StyleEditorComponent } from './pages';

const routes: Routes = [{ path: '', component: StyleEditorComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StyleRoutingModule {}
