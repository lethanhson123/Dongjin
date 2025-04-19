import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { zt_help_db } from 'src/app/shared/MES/zt_help_db.model';
import { zt_help_dbService } from 'src/app/shared/MES/zt_help_db.service';

@Component({
  selector: 'app-zt_help_db',
  templateUrl: './zt_help_db.component.html',
  styleUrls: ['./zt_help_db.component.css']
})
export class zt_help_dbComponent implements OnInit {

  @ViewChild('zt_help_dbSort') zt_help_dbSort: MatSort;
  @ViewChild('zt_help_dbPaginator') zt_help_dbPaginator: MatPaginator;

  constructor(
    public Dialog: MatDialog,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public zt_help_dbService: zt_help_dbService,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.zt_help_dbSearch();
  }
  zt_help_dbSearch() {
    this.zt_help_dbService.SearchAll(this.zt_help_dbSort, this.zt_help_dbPaginator);
  }
  zt_help_dbSave(element: zt_help_db) {
    this.zt_help_dbService.FormData = element;
    this.NotificationService.warn(this.zt_help_dbService.ComponentSaveAll(this.zt_help_dbSort, this.zt_help_dbPaginator));
  }
  zt_help_dbDelete(element: zt_help_db) {
    this.zt_help_dbService.BaseParameter.ID = element.IDX;
    this.NotificationService.warn(this.zt_help_dbService.ComponentDeleteAll(this.zt_help_dbSort, this.zt_help_dbPaginator));
  }
  zt_help_dbAdd(element: zt_help_db) {
    this.zt_help_dbService.FormData = element;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = environment.DialogConfigWidth;
    dialogConfig.data = { ID: 0 };
    const dialog = this.Dialog.open(zt_help_dbDetailComponent, dialogConfig);
    dialog.afterClosed().subscribe(() => {
      this.zt_help_dbSearch();
    });
  }
}
