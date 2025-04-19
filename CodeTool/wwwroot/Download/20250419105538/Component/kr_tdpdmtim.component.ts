import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { kr_tdpdmtim } from 'src/app/shared/MES/kr_tdpdmtim.model';
import { kr_tdpdmtimService } from 'src/app/shared/MES/kr_tdpdmtim.service';

@Component({
  selector: 'app-kr_tdpdmtim',
  templateUrl: './kr_tdpdmtim.component.html',
  styleUrls: ['./kr_tdpdmtim.component.css']
})
export class kr_tdpdmtimComponent implements OnInit {

  @ViewChild('kr_tdpdmtimSort') kr_tdpdmtimSort: MatSort;
  @ViewChild('kr_tdpdmtimPaginator') kr_tdpdmtimPaginator: MatPaginator;

  constructor(
    public Dialog: MatDialog,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public kr_tdpdmtimService: kr_tdpdmtimService,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.kr_tdpdmtimSearch();
  }
  kr_tdpdmtimSearch() {
    this.kr_tdpdmtimService.SearchAll(this.kr_tdpdmtimSort, this.kr_tdpdmtimPaginator);
  }
  kr_tdpdmtimSave(element: kr_tdpdmtim) {
    this.kr_tdpdmtimService.FormData = element;
    this.NotificationService.warn(this.kr_tdpdmtimService.ComponentSaveAll(this.kr_tdpdmtimSort, this.kr_tdpdmtimPaginator));
  }
  kr_tdpdmtimDelete(element: kr_tdpdmtim) {
    this.kr_tdpdmtimService.BaseParameter.ID = element.PDMTIN_IDX;
    this.NotificationService.warn(this.kr_tdpdmtimService.ComponentDeleteAll(this.kr_tdpdmtimSort, this.kr_tdpdmtimPaginator));
  }
  kr_tdpdmtimAdd(element: kr_tdpdmtim) {
    this.kr_tdpdmtimService.FormData = element;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = environment.DialogConfigWidth;
    dialogConfig.data = { ID: 0 };
    const dialog = this.Dialog.open(kr_tdpdmtimDetailComponent, dialogConfig);
    dialog.afterClosed().subscribe(() => {
      this.kr_tdpdmtimSearch();
    });
  }
}
