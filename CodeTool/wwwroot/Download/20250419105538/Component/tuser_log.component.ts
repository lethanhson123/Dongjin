import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { tuser_log } from 'src/app/shared/MES/tuser_log.model';
import { tuser_logService } from 'src/app/shared/MES/tuser_log.service';

@Component({
  selector: 'app-tuser_log',
  templateUrl: './tuser_log.component.html',
  styleUrls: ['./tuser_log.component.css']
})
export class tuser_logComponent implements OnInit {

  @ViewChild('tuser_logSort') tuser_logSort: MatSort;
  @ViewChild('tuser_logPaginator') tuser_logPaginator: MatPaginator;

  constructor(
    public Dialog: MatDialog,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public tuser_logService: tuser_logService,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.tuser_logSearch();
  }
  tuser_logSearch() {
    this.tuser_logService.SearchAll(this.tuser_logSort, this.tuser_logPaginator);
  }
  tuser_logSave(element: tuser_log) {
    this.tuser_logService.FormData = element;
    this.NotificationService.warn(this.tuser_logService.ComponentSaveAll(this.tuser_logSort, this.tuser_logPaginator));
  }
  tuser_logDelete(element: tuser_log) {
    this.tuser_logService.BaseParameter.ID = element.TUSER_IDX;
    this.NotificationService.warn(this.tuser_logService.ComponentDeleteAll(this.tuser_logSort, this.tuser_logPaginator));
  }
  tuser_logAdd(element: tuser_log) {
    this.tuser_logService.FormData = element;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = environment.DialogConfigWidth;
    dialogConfig.data = { ID: 0 };
    const dialog = this.Dialog.open(tuser_logDetailComponent, dialogConfig);
    dialog.afterClosed().subscribe(() => {
      this.tuser_logSearch();
    });
  }
}
