import { Component, EventEmitter, Output, inject } from '@angular/core';
import { ThemeService } from '../../services';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Output() toggleSideNav = new EventEmitter<any>();

  themeService = inject(ThemeService);
}
