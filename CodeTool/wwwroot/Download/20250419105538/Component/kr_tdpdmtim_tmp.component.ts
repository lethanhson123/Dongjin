import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { kr_tdpdmtim_tmp } from 'src/app/shared/MES/kr_tdpdmtim_tmp.model';
import { kr_tdpdmtim_tmpService } from 'src/app/shared/MES/kr_tdpdmtim_tmp.service';

@Component({
  selector: 'app-kr_tdpdmtim_tmp',
  templateUrl: './kr_tdpdmtim_tmp.component.html',
  styleUrls: ['./kr_tdpdmtim_tmp.component.css']
})
export class kr_tdpdmtim_tmpComponent implements OnInit {

  @ViewChild('kr_tdpdmtim_tmpSort') kr_tdpdmtim_tmpSort: MatSort;
  @ViewChild('kr_tdpdmtim_tmpPaginator') kr_tdpdmtim_tmpPaginator: MatPaginator;

  constructor(
    public Dialog: MatDialog,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public kr_tdpdmtim_tmpService: kr_tdpdmtim_tmpService,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.kr_tdpdmtim_tmpSearch();
  }
  kr_tdpdmtim_tmpSearch() {
    this.kr_tdpdmtim_tmpService.SearchAll(this.kr_tdpdmtim_tmpSort, this.kr_tdpdmtim_tmpPaginator);
  }
  kr_tdpdmtim_tmpSave(element: kr_tdpdmtim_tmp) {
    this.kr_tdpdmtim_tmpService.FormData = element;
    this.NotificationService.warn(this.kr_tdpdmtim_tmpService.ComponentSaveAll(this.kr_tdpdmtim_tmpSort, this.kr_tdpdmtim_tmpPaginator));
  }
  kr_tdpdmtim_tmpDelete(element: kr_tdpdmtim_tmp) {
    this.kr_tdpdmtim_tmpService.BaseParameter.ID = element.KR_TDPDMTIN_IDX;
    this.NotificationService.warn(this.kr_tdpdmtim_tmpService.ComponentDeleteAll(this.kr_tdpdmtim_tmpSort, this.kr_tdpdmtim_tmpPaginator));
  }
  kr_tdpdmtim_tmpAdd(element: kr_tdpdmtim_tmp) {
    this.kr_tdpdmtim_tmpService.FormData = element;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = environment.DialogConfigWidth;
    dialogConfig.data = { ID: 0 };
    const dialog = this.Dialog.open(kr_tdpdmtim_tmpDetailComponent, dialogConfig);
    dialog.afterClosed().subscribe(() => {
      this.kr_tdpdmtim_tmpSearch();
    });
  }
}
