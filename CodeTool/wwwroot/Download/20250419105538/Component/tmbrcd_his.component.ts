import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { tmbrcd_his } from 'src/app/shared/MES/tmbrcd_his.model';
import { tmbrcd_hisService } from 'src/app/shared/MES/tmbrcd_his.service';

@Component({
  selector: 'app-tmbrcd_his',
  templateUrl: './tmbrcd_his.component.html',
  styleUrls: ['./tmbrcd_his.component.css']
})
export class tmbrcd_hisComponent implements OnInit {

  @ViewChild('tmbrcd_hisSort') tmbrcd_hisSort: MatSort;
  @ViewChild('tmbrcd_hisPaginator') tmbrcd_hisPaginator: MatPaginator;

  constructor(
    public Dialog: MatDialog,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public tmbrcd_hisService: tmbrcd_hisService,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.tmbrcd_hisSearch();
  }
  tmbrcd_hisSearch() {
    this.tmbrcd_hisService.SearchAll(this.tmbrcd_hisSort, this.tmbrcd_hisPaginator);
  }
  tmbrcd_hisSave(element: tmbrcd_his) {
    this.tmbrcd_hisService.FormData = element;
    this.NotificationService.warn(this.tmbrcd_hisService.ComponentSaveAll(this.tmbrcd_hisSort, this.tmbrcd_hisPaginator));
  }
  tmbrcd_hisDelete(element: tmbrcd_his) {
    this.tmbrcd_hisService.BaseParameter.ID = element.BARCD_IDX;
    this.NotificationService.warn(this.tmbrcd_hisService.ComponentDeleteAll(this.tmbrcd_hisSort, this.tmbrcd_hisPaginator));
  }
  tmbrcd_hisAdd(element: tmbrcd_his) {
    this.tmbrcd_hisService.FormData = element;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = environment.DialogConfigWidth;
    dialogConfig.data = { ID: 0 };
    const dialog = this.Dialog.open(tmbrcd_hisDetailComponent, dialogConfig);
    dialog.afterClosed().subscribe(() => {
      this.tmbrcd_hisSearch();
    });
  }
}
