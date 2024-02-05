import { Component, OnInit } from '@angular/core';
// import { SassService } from '../../services';

@Component({
  selector: 'app-style-editor',
  templateUrl: './style-editor.component.html',
  styleUrls: ['./style-editor.component.scss'],
})
export class StyleEditorComponent implements OnInit {
  cssInput: string = '';
  scssOutput: string = '';

  constructor() {}

  ngOnInit() {}

  convertCssToScss() {}
}
