import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { kr_tdpdmtim_tmp_out } from 'src/app/shared/MES/kr_tdpdmtim_tmp_out.model';
import { kr_tdpdmtim_tmp_outService } from 'src/app/shared/MES/kr_tdpdmtim_tmp_out.service';

@Component({
  selector: 'app-kr_tdpdmtim_tmp_out',
  templateUrl: './kr_tdpdmtim_tmp_out.component.html',
  styleUrls: ['./kr_tdpdmtim_tmp_out.component.css']
})
export class kr_tdpdmtim_tmp_outComponent implements OnInit {

  @ViewChild('kr_tdpdmtim_tmp_outSort') kr_tdpdmtim_tmp_outSort: MatSort;
  @ViewChild('kr_tdpdmtim_tmp_outPaginator') kr_tdpdmtim_tmp_outPaginator: MatPaginator;

  constructor(
    public Dialog: MatDialog,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public kr_tdpdmtim_tmp_outService: kr_tdpdmtim_tmp_outService,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.kr_tdpdmtim_tmp_outSearch();
  }
  kr_tdpdmtim_tmp_outSearch() {
    this.kr_tdpdmtim_tmp_outService.SearchAll(this.kr_tdpdmtim_tmp_outSort, this.kr_tdpdmtim_tmp_outPaginator);
  }
  kr_tdpdmtim_tmp_outSave(element: kr_tdpdmtim_tmp_out) {
    this.kr_tdpdmtim_tmp_outService.FormData = element;
    this.NotificationService.warn(this.kr_tdpdmtim_tmp_outService.ComponentSaveAll(this.kr_tdpdmtim_tmp_outSort, this.kr_tdpdmtim_tmp_outPaginator));
  }
  kr_tdpdmtim_tmp_outDelete(element: kr_tdpdmtim_tmp_out) {
    this.kr_tdpdmtim_tmp_outService.BaseParameter.ID = element.PDMTIN_IDX;
    this.NotificationService.warn(this.kr_tdpdmtim_tmp_outService.ComponentDeleteAll(this.kr_tdpdmtim_tmp_outSort, this.kr_tdpdmtim_tmp_outPaginator));
  }
  kr_tdpdmtim_tmp_outAdd(element: kr_tdpdmtim_tmp_out) {
    this.kr_tdpdmtim_tmp_outService.FormData = element;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = environment.DialogConfigWidth;
    dialogConfig.data = { ID: 0 };
    const dialog = this.Dialog.open(kr_tdpdmtim_tmp_outDetailComponent, dialogConfig);
    dialog.afterClosed().subscribe(() => {
      this.kr_tdpdmtim_tmp_outSearch();
    });
  }
}
