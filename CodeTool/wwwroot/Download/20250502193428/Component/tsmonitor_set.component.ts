import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { tsmonitor_set } from 'src/app/shared/MES/tsmonitor_set.model';
import { tsmonitor_setService } from 'src/app/shared/MES/tsmonitor_set.service';

@Component({
  selector: 'app-tsmonitor_set',
  templateUrl: './tsmonitor_set.component.html',
  styleUrls: ['./tsmonitor_set.component.css']
})
export class tsmonitor_setComponent implements OnInit {

  @ViewChild('tsmonitor_setSort') tsmonitor_setSort: MatSort;
  @ViewChild('tsmonitor_setPaginator') tsmonitor_setPaginator: MatPaginator;

  constructor(
    public Dialog: MatDialog,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public tsmonitor_setService: tsmonitor_setService,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.tsmonitor_setSearch();
  }
  tsmonitor_setSearch() {
    this.tsmonitor_setService.SearchAll(this.tsmonitor_setSort, this.tsmonitor_setPaginator);
  }
  tsmonitor_setSave(element: tsmonitor_set) {
    this.tsmonitor_setService.FormData = element;
    this.NotificationService.warn(this.tsmonitor_setService.ComponentSaveAll(this.tsmonitor_setSort, this.tsmonitor_setPaginator));
  }
  tsmonitor_setDelete(element: tsmonitor_set) {
    this.tsmonitor_setService.BaseParameter.ID = element.TSMONITOR_SET_IDX;
    this.NotificationService.warn(this.tsmonitor_setService.ComponentDeleteAll(this.tsmonitor_setSort, this.tsmonitor_setPaginator));
  }
  tsmonitor_setAdd(element: tsmonitor_set) {
    this.tsmonitor_setService.FormData = element;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = environment.DialogConfigWidth;
    dialogConfig.data = { ID: 0 };
    const dialog = this.Dialog.open(tsmonitor_setDetailComponent, dialogConfig);
    dialog.afterClosed().subscribe(() => {
      this.tsmonitor_setSearch();
    });
  }
}
