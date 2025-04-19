import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { apqp_cdgr } from 'src/app/shared/MES/apqp_cdgr.model';
import { apqp_cdgrService } from 'src/app/shared/MES/apqp_cdgr.service';

@Component({
  selector: 'app-apqp_cdgr',
  templateUrl: './apqp_cdgr.component.html',
  styleUrls: ['./apqp_cdgr.component.css']
})
export class apqp_cdgrComponent implements OnInit {

  @ViewChild('apqp_cdgrSort') apqp_cdgrSort: MatSort;
  @ViewChild('apqp_cdgrPaginator') apqp_cdgrPaginator: MatPaginator;

  constructor(
    public Dialog: MatDialog,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public apqp_cdgrService: apqp_cdgrService,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.apqp_cdgrSearch();
  }
  apqp_cdgrSearch() {
    this.apqp_cdgrService.SearchAll(this.apqp_cdgrSort, this.apqp_cdgrPaginator);
  }
  apqp_cdgrSave(element: apqp_cdgr) {
    this.apqp_cdgrService.FormData = element;
    this.NotificationService.warn(this.apqp_cdgrService.ComponentSaveAll(this.apqp_cdgrSort, this.apqp_cdgrPaginator));
  }
  apqp_cdgrDelete(element: apqp_cdgr) {
    this.apqp_cdgrService.BaseParameter.ID = element.CDGR_IDX;
    this.NotificationService.warn(this.apqp_cdgrService.ComponentDeleteAll(this.apqp_cdgrSort, this.apqp_cdgrPaginator));
  }
  apqp_cdgrAdd(element: apqp_cdgr) {
    this.apqp_cdgrService.FormData = element;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = environment.DialogConfigWidth;
    dialogConfig.data = { ID: 0 };
    const dialog = this.Dialog.open(apqp_cdgrDetailComponent, dialogConfig);
    dialog.afterClosed().subscribe(() => {
      this.apqp_cdgrSearch();
    });
  }
}
