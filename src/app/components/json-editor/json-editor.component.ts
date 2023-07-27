import { Component, ViewChild, OnInit } from '@angular/core';
import {
  JsonEditorMode,
  JsonEditorOptions,
  JsonEditorComponent,
} from '@maaxgr/ang-jsoneditor';
import exportFromJSON from 'export-from-json';
import { env } from 'src/assets/env';
import { AppService } from 'src/app/shared/services/app.service';

@Component({
  selector: 'app-json-editor',
  templateUrl: './json-editor.component.html',
  styleUrls: ['./json-editor.component.scss'],
})
export class JsonAppEditorComponent implements OnInit {
  @ViewChild(JsonEditorComponent, { static: false })
  editor!: JsonEditorComponent;
  json: any;

  public editorOptions: JsonEditorOptions;
  public initialData: any;
  public visibleData: any;

  constructor(private appService: AppService) {
    this.editorOptions = new JsonEditorOptions();
    this.editorOptions.modes = env.editorOptions.modes as JsonEditorMode[];
    this.initialData = env.initialData;
    this.json = this.initialData;
    this.visibleData = this.initialData;
  }

  ngOnInit(): void {
    this.appService.jsonData.subscribe((data) => {
      this.json = data || this.initialData;
    });
  }

  onJsonChange(event: any) {
    this.visibleData = event;
  }

  onFileChange(event: any) {
    let file = event.target.files[0];
    let reader = new FileReader();
    reader.onload = () => {
      let text: any = reader.result;
      this.json = JSON.parse(text);
    };
    reader.readAsText(file);
  }

  onJsonExport() {
    let modifiedJson: any = this.editor.get();
    this.appService.jsonData.next(modifiedJson);
    let exportData = this.json;
    let fileName = env.fileName;
    let exportType: any = env.fileType;
    exportFromJSON({ data: exportData, fileName, exportType });
  }
}
