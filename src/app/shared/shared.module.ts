import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AngJsoneditorModule } from '@maaxgr/ang-jsoneditor';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

import {
  DeveloperComponent,
  HeaderComponent,
  FooterComponent,
  SideNavComponent,
} from './components';

@NgModule({
  declarations: [
    DeveloperComponent,
    HeaderComponent,
    FooterComponent,
    SideNavComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    AngJsoneditorModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatDividerModule,
    MatListModule,
    MatButtonToggleModule,
  ],
  exports: [
    DeveloperComponent,
    FontAwesomeModule,
    AngJsoneditorModule,
    HeaderComponent,
    FooterComponent,
    SideNavComponent,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatDividerModule,
    MatListModule,
    MatButtonToggleModule,
  ],
})
export class SharedModule {}
