import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { zt_devlpmnt_db } from 'src/app/shared/MES/zt_devlpmnt_db.model';
import { zt_devlpmnt_dbService } from 'src/app/shared/MES/zt_devlpmnt_db.service';

@Component({
  selector: 'app-zt_devlpmnt_db',
  templateUrl: './zt_devlpmnt_db.component.html',
  styleUrls: ['./zt_devlpmnt_db.component.css']
})
export class zt_devlpmnt_dbComponent implements OnInit {

  @ViewChild('zt_devlpmnt_dbSort') zt_devlpmnt_dbSort: MatSort;
  @ViewChild('zt_devlpmnt_dbPaginator') zt_devlpmnt_dbPaginator: MatPaginator;

  constructor(
    public Dialog: MatDialog,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public zt_devlpmnt_dbService: zt_devlpmnt_dbService,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.zt_devlpmnt_dbSearch();
  }
  zt_devlpmnt_dbSearch() {
    this.zt_devlpmnt_dbService.SearchAll(this.zt_devlpmnt_dbSort, this.zt_devlpmnt_dbPaginator);
  }
  zt_devlpmnt_dbSave(element: zt_devlpmnt_db) {
    this.zt_devlpmnt_dbService.FormData = element;
    this.NotificationService.warn(this.zt_devlpmnt_dbService.ComponentSaveAll(this.zt_devlpmnt_dbSort, this.zt_devlpmnt_dbPaginator));
  }
  zt_devlpmnt_dbDelete(element: zt_devlpmnt_db) {
    this.zt_devlpmnt_dbService.BaseParameter.ID = element.DELP_IDX;
    this.NotificationService.warn(this.zt_devlpmnt_dbService.ComponentDeleteAll(this.zt_devlpmnt_dbSort, this.zt_devlpmnt_dbPaginator));
  }
  zt_devlpmnt_dbAdd(element: zt_devlpmnt_db) {
    this.zt_devlpmnt_dbService.FormData = element;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = environment.DialogConfigWidth;
    dialogConfig.data = { ID: 0 };
    const dialog = this.Dialog.open(zt_devlpmnt_dbDetailComponent, dialogConfig);
    dialog.afterClosed().subscribe(() => {
      this.zt_devlpmnt_dbSearch();
    });
  }
}
