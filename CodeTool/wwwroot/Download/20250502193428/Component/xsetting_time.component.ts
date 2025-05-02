import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { xsetting_time } from 'src/app/shared/MES/xsetting_time.model';
import { xsetting_timeService } from 'src/app/shared/MES/xsetting_time.service';

@Component({
  selector: 'app-xsetting_time',
  templateUrl: './xsetting_time.component.html',
  styleUrls: ['./xsetting_time.component.css']
})
export class xsetting_timeComponent implements OnInit {

  @ViewChild('xsetting_timeSort') xsetting_timeSort: MatSort;
  @ViewChild('xsetting_timePaginator') xsetting_timePaginator: MatPaginator;

  constructor(
    public Dialog: MatDialog,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public xsetting_timeService: xsetting_timeService,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.xsetting_timeSearch();
  }
  xsetting_timeSearch() {
    this.xsetting_timeService.SearchAll(this.xsetting_timeSort, this.xsetting_timePaginator);
  }
  xsetting_timeSave(element: xsetting_time) {
    this.xsetting_timeService.FormData = element;
    this.NotificationService.warn(this.xsetting_timeService.ComponentSaveAll(this.xsetting_timeSort, this.xsetting_timePaginator));
  }
  xsetting_timeDelete(element: xsetting_time) {
    this.xsetting_timeService.BaseParameter.ID = element.SETTING_IDX;
    this.NotificationService.warn(this.xsetting_timeService.ComponentDeleteAll(this.xsetting_timeSort, this.xsetting_timePaginator));
  }
  xsetting_timeAdd(element: xsetting_time) {
    this.xsetting_timeService.FormData = element;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = environment.DialogConfigWidth;
    dialogConfig.data = { ID: 0 };
    const dialog = this.Dialog.open(xsetting_timeDetailComponent, dialogConfig);
    dialog.afterClosed().subscribe(() => {
      this.xsetting_timeSearch();
    });
  }
}
