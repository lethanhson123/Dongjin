import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { tscdgr } from 'src/app/shared/MES/tscdgr.model';
import { tscdgrService } from 'src/app/shared/MES/tscdgr.service';

@Component({
  selector: 'app-tscdgr',
  templateUrl: './tscdgr.component.html',
  styleUrls: ['./tscdgr.component.css']
})
export class tscdgrComponent implements OnInit {

  @ViewChild('tscdgrSort') tscdgrSort: MatSort;
  @ViewChild('tscdgrPaginator') tscdgrPaginator: MatPaginator;

  constructor(
    public Dialog: MatDialog,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public tscdgrService: tscdgrService,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.tscdgrSearch();
  }
  tscdgrSearch() {
    this.tscdgrService.SearchAll(this.tscdgrSort, this.tscdgrPaginator);
  }
  tscdgrSave(element: tscdgr) {
    this.tscdgrService.FormData = element;
    this.NotificationService.warn(this.tscdgrService.ComponentSaveAll(this.tscdgrSort, this.tscdgrPaginator));
  }
  tscdgrDelete(element: tscdgr) {
    this.tscdgrService.BaseParameter.ID = element.CDGR_IDX;
    this.NotificationService.warn(this.tscdgrService.ComponentDeleteAll(this.tscdgrSort, this.tscdgrPaginator));
  }
  tscdgrAdd(element: tscdgr) {
    this.tscdgrService.FormData = element;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = environment.DialogConfigWidth;
    dialogConfig.data = { ID: 0 };
    const dialog = this.Dialog.open(tscdgrDetailComponent, dialogConfig);
    dialog.afterClosed().subscribe(() => {
      this.tscdgrSearch();
    });
  }
}
