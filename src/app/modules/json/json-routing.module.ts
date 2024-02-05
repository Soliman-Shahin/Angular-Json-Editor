import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JsonAppEditorComponent } from './pages';

const routes: Routes = [{ path: '', component: JsonAppEditorComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JsonRoutingModule {}
