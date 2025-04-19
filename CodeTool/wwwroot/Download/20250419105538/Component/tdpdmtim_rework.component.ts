import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { tdpdmtim_rework } from 'src/app/shared/MES/tdpdmtim_rework.model';
import { tdpdmtim_reworkService } from 'src/app/shared/MES/tdpdmtim_rework.service';

@Component({
  selector: 'app-tdpdmtim_rework',
  templateUrl: './tdpdmtim_rework.component.html',
  styleUrls: ['./tdpdmtim_rework.component.css']
})
export class tdpdmtim_reworkComponent implements OnInit {

  @ViewChild('tdpdmtim_reworkSort') tdpdmtim_reworkSort: MatSort;
  @ViewChild('tdpdmtim_reworkPaginator') tdpdmtim_reworkPaginator: MatPaginator;

  constructor(
    public Dialog: MatDialog,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public tdpdmtim_reworkService: tdpdmtim_reworkService,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.tdpdmtim_reworkSearch();
  }
  tdpdmtim_reworkSearch() {
    this.tdpdmtim_reworkService.SearchAll(this.tdpdmtim_reworkSort, this.tdpdmtim_reworkPaginator);
  }
  tdpdmtim_reworkSave(element: tdpdmtim_rework) {
    this.tdpdmtim_reworkService.FormData = element;
    this.NotificationService.warn(this.tdpdmtim_reworkService.ComponentSaveAll(this.tdpdmtim_reworkSort, this.tdpdmtim_reworkPaginator));
  }
  tdpdmtim_reworkDelete(element: tdpdmtim_rework) {
    this.tdpdmtim_reworkService.BaseParameter.ID = element.PDMTIN_IDX;
    this.NotificationService.warn(this.tdpdmtim_reworkService.ComponentDeleteAll(this.tdpdmtim_reworkSort, this.tdpdmtim_reworkPaginator));
  }
  tdpdmtim_reworkAdd(element: tdpdmtim_rework) {
    this.tdpdmtim_reworkService.FormData = element;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = environment.DialogConfigWidth;
    dialogConfig.data = { ID: 0 };
    const dialog = this.Dialog.open(tdpdmtim_reworkDetailComponent, dialogConfig);
    dialog.afterClosed().subscribe(() => {
      this.tdpdmtim_reworkSearch();
    });
  }
}
