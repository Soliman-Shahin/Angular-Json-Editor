import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // Home page
  {
    path: 'home',
    title: 'Home',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomeModule),
  },
  // json-editor pages
  {
    path: 'json-editor',
    title: 'online json editor',
    loadChildren: () =>
      import('./modules/json/json.module').then((m) => m.JsonModule),
  },
  // style editor
  {
    path: 'style-editor',
    title: 'style editor',
    loadChildren: () =>
      import('./modules/style/style.module').then((m) => m.StyleModule),
  },
  { path: '', pathMatch: 'full', redirectTo: '/json-editor' },
  { path: '**', redirectTo: '/errors/404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
