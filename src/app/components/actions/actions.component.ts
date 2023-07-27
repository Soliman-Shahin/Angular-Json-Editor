import { Component, EventEmitter, Output } from '@angular/core';
import {
  faFileImport,
  faFileExport,
  faRemoveFormat,
} from '@fortawesome/free-solid-svg-icons';
import { AppService } from 'src/app/shared/services/app.service';

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.scss'],
})
export class ActionsComponent {
  @Output() jsonChange = new EventEmitter<any>();
  @Output() jsonExport = new EventEmitter<void>();

  faFileImport = faFileImport;
  faFileExport = faFileExport;
  faRemoveFormat = faRemoveFormat;

  constructor(private appService: AppService) { }

  onJsonClear() {
    this.appService.jsonData.next(null);
  }
}
