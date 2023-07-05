import { AppService } from './shared/services/app.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { JsonEditorComponent, JsonEditorOptions } from '@maaxgr/ang-jsoneditor';
import {
  faFileImport,
  faFileExport,
  faRemoveFormat,
} from '@fortawesome/free-solid-svg-icons';
import exportFromJSON from 'export-from-json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  @ViewChild(JsonEditorComponent, { static: false })
  editor!: JsonEditorComponent;

  title = 'online json editor';
  json: any;

  public editorOptions: JsonEditorOptions;
  public initialData: any;
  public visibleData: any;

  faFileImport = faFileImport;
  faFileExport = faFileExport;
  faRemoveFormat = faRemoveFormat;

  constructor(private appService: AppService) {
    this.editorOptions = new JsonEditorOptions();
    this.editorOptions.modes = ['code', 'text', 'form', 'tree', 'view'];
    this.initialData = {
      success: {
        message: 'Welcome to JSON Editor',
        status_code: 200,
      },
    };
    this.json = this.initialData;
    this.visibleData = this.initialData;
  }

  ngOnInit(): void {
    this.appService.jsonData.subscribe((data) => {
      this.json = data || this.initialData;
    });
  }

  getData(event: any) {
    this.visibleData = event;
  }

  onFileChange(event: any) {
    let file = event.target.files[0];
    let reader = new FileReader();
    reader.onload = () => {
      let text: any = reader.result;
      this.json = JSON.parse(text);
      this.appService.jsonData.next(this.json);
    };
    reader.readAsText(file);
  }

  saveJson() {
    let modifiedJson: any = this.editor.get();
    this.appService.jsonData.next(modifiedJson);
    let exportData = this.json;
    let fileName = 'online-json-editor';
    let exportType: any = 'json';
    exportFromJSON({ data: exportData, fileName, exportType });
  }

  clear() {
    this.appService.jsonData.next(null);
  }
}
