import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { zt_log_db } from 'src/app/shared/MES/zt_log_db.model';
import { zt_log_dbService } from 'src/app/shared/MES/zt_log_db.service';

@Component({
  selector: 'app-zt_log_db',
  templateUrl: './zt_log_db.component.html',
  styleUrls: ['./zt_log_db.component.css']
})
export class zt_log_dbComponent implements OnInit {

  @ViewChild('zt_log_dbSort') zt_log_dbSort: MatSort;
  @ViewChild('zt_log_dbPaginator') zt_log_dbPaginator: MatPaginator;

  constructor(
    public Dialog: MatDialog,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public zt_log_dbService: zt_log_dbService,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.zt_log_dbSearch();
  }
  zt_log_dbSearch() {
    this.zt_log_dbService.SearchAll(this.zt_log_dbSort, this.zt_log_dbPaginator);
  }
  zt_log_dbSave(element: zt_log_db) {
    this.zt_log_dbService.FormData = element;
    this.NotificationService.warn(this.zt_log_dbService.ComponentSaveAll(this.zt_log_dbSort, this.zt_log_dbPaginator));
  }
  zt_log_dbDelete(element: zt_log_db) {
    this.zt_log_dbService.BaseParameter.ID = element.IDX;
    this.NotificationService.warn(this.zt_log_dbService.ComponentDeleteAll(this.zt_log_dbSort, this.zt_log_dbPaginator));
  }
  zt_log_dbAdd(element: zt_log_db) {
    this.zt_log_dbService.FormData = element;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = environment.DialogConfigWidth;
    dialogConfig.data = { ID: 0 };
    const dialog = this.Dialog.open(zt_log_dbDetailComponent, dialogConfig);
    dialog.afterClosed().subscribe(() => {
      this.zt_log_dbSearch();
    });
  }
}
