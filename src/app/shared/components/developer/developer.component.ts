import { Component } from '@angular/core';
import { env } from 'src/assets/env';

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.scss'],
})
export class DeveloperComponent {
  developerName: string = env.author;
  githubLink: string = env.github;
}
