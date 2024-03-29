import { Component } from '@angular/core';
import { env } from 'src/assets/env';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = env.title;

  constructor() {}
}
