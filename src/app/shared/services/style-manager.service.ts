import { Injectable } from '@angular/core';
import { env } from 'src/assets/env';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  static readonly darkThemeClass = 'dark-theme';

  private mode: string;

  constructor() {
    this.mode = localStorage.getItem('theme') || env.theme;
    this.updateBodyClass();
  }

  get themeMode(): string {
    return this.mode;
  }

  set themeMode(mode: string) {
    this.mode = mode;
    localStorage.setItem('theme', mode);
    this.updateBodyClass();
  }

  private updateBodyClass() {
    if (this.mode === 'dark') {
      document.body.classList.add(ThemeService.darkThemeClass);
    } else {
      document.body.classList.remove(ThemeService.darkThemeClass);
    }
  }
}
