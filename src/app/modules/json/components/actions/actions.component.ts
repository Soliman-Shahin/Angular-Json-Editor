import { Component, EventEmitter, Output } from '@angular/core';
import { AppService } from 'src/app/shared/services/app.service';

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.scss'],
})
export class ActionsComponent {
  @Output() jsonChange = new EventEmitter<any>();
  @Output() jsonExport = new EventEmitter<void>();

  constructor(private appService: AppService) {}

  onJsonClear() {
    this.appService.jsonData.next(null);
  }
}
