import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { ttoolhistory } from 'src/app/shared/MES/ttoolhistory.model';
import { ttoolhistoryService } from 'src/app/shared/MES/ttoolhistory.service';

@Component({
  selector: 'app-ttoolhistory',
  templateUrl: './ttoolhistory.component.html',
  styleUrls: ['./ttoolhistory.component.css']
})
export class ttoolhistoryComponent implements OnInit {

  @ViewChild('ttoolhistorySort') ttoolhistorySort: MatSort;
  @ViewChild('ttoolhistoryPaginator') ttoolhistoryPaginator: MatPaginator;

  constructor(
    public Dialog: MatDialog,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public ttoolhistoryService: ttoolhistoryService,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.ttoolhistorySearch();
  }
  ttoolhistorySearch() {
    this.ttoolhistoryService.SearchAll(this.ttoolhistorySort, this.ttoolhistoryPaginator);
  }
  ttoolhistorySave(element: ttoolhistory) {
    this.ttoolhistoryService.FormData = element;
    this.NotificationService.warn(this.ttoolhistoryService.ComponentSaveAll(this.ttoolhistorySort, this.ttoolhistoryPaginator));
  }
  ttoolhistoryDelete(element: ttoolhistory) {
    this.ttoolhistoryService.BaseParameter.ID = element.TOOL_HIS_IDX;
    this.NotificationService.warn(this.ttoolhistoryService.ComponentDeleteAll(this.ttoolhistorySort, this.ttoolhistoryPaginator));
  }
  ttoolhistoryAdd(element: ttoolhistory) {
    this.ttoolhistoryService.FormData = element;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = environment.DialogConfigWidth;
    dialogConfig.data = { ID: 0 };
    const dialog = this.Dialog.open(ttoolhistoryDetailComponent, dialogConfig);
    dialog.afterClosed().subscribe(() => {
      this.ttoolhistorySearch();
    });
  }
}
