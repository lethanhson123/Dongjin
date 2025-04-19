import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { tmbrcd_longterm } from 'src/app/shared/MES/tmbrcd_longterm.model';
import { tmbrcd_longtermService } from 'src/app/shared/MES/tmbrcd_longterm.service';

@Component({
  selector: 'app-tmbrcd_longterm',
  templateUrl: './tmbrcd_longterm.component.html',
  styleUrls: ['./tmbrcd_longterm.component.css']
})
export class tmbrcd_longtermComponent implements OnInit {

  @ViewChild('tmbrcd_longtermSort') tmbrcd_longtermSort: MatSort;
  @ViewChild('tmbrcd_longtermPaginator') tmbrcd_longtermPaginator: MatPaginator;

  constructor(
    public Dialog: MatDialog,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public tmbrcd_longtermService: tmbrcd_longtermService,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.tmbrcd_longtermSearch();
  }
  tmbrcd_longtermSearch() {
    this.tmbrcd_longtermService.SearchAll(this.tmbrcd_longtermSort, this.tmbrcd_longtermPaginator);
  }
  tmbrcd_longtermSave(element: tmbrcd_longterm) {
    this.tmbrcd_longtermService.FormData = element;
    this.NotificationService.warn(this.tmbrcd_longtermService.ComponentSaveAll(this.tmbrcd_longtermSort, this.tmbrcd_longtermPaginator));
  }
  tmbrcd_longtermDelete(element: tmbrcd_longterm) {
    this.tmbrcd_longtermService.BaseParameter.ID = element.TMBRCD_LONGTERM_IDX;
    this.NotificationService.warn(this.tmbrcd_longtermService.ComponentDeleteAll(this.tmbrcd_longtermSort, this.tmbrcd_longtermPaginator));
  }
  tmbrcd_longtermAdd(element: tmbrcd_longterm) {
    this.tmbrcd_longtermService.FormData = element;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = environment.DialogConfigWidth;
    dialogConfig.data = { ID: 0 };
    const dialog = this.Dialog.open(tmbrcd_longtermDetailComponent, dialogConfig);
    dialog.afterClosed().subscribe(() => {
      this.tmbrcd_longtermSearch();
    });
  }
}
