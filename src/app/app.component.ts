import { Component, ViewChild } from '@angular/core';
import { JsonEditorComponent, JsonEditorOptions } from "@maaxgr/ang-jsoneditor";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'json-edit-app';

  @ViewChild(JsonEditorComponent, { static: false }) editor!: JsonEditorComponent;

  public editorOptions: JsonEditorOptions;
  public initialData: any;
  public visibleData: any;

  constructor() {
    this.editorOptions = new JsonEditorOptions()
    this.editorOptions.modes = ['code', 'text', 'tree', 'view'];

    this.initialData = {
      "success": {
        "message": "Welcome to JSON Editor",
        "status_code": 200
      }
    }
    this.visibleData = this.initialData;
  }

  getData(event: any) {
    this.visibleData = event;
  }
}
