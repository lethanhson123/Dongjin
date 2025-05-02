import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { tdpdmtim_tmp } from 'src/app/shared/MES/tdpdmtim_tmp.model';
import { tdpdmtim_tmpService } from 'src/app/shared/MES/tdpdmtim_tmp.service';

@Component({
  selector: 'app-tdpdmtim_tmp',
  templateUrl: './tdpdmtim_tmp.component.html',
  styleUrls: ['./tdpdmtim_tmp.component.css']
})
export class tdpdmtim_tmpComponent implements OnInit {

  @ViewChild('tdpdmtim_tmpSort') tdpdmtim_tmpSort: MatSort;
  @ViewChild('tdpdmtim_tmpPaginator') tdpdmtim_tmpPaginator: MatPaginator;

  constructor(
    public Dialog: MatDialog,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public tdpdmtim_tmpService: tdpdmtim_tmpService,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.tdpdmtim_tmpSearch();
  }
  tdpdmtim_tmpSearch() {
    this.tdpdmtim_tmpService.SearchAll(this.tdpdmtim_tmpSort, this.tdpdmtim_tmpPaginator);
  }
  tdpdmtim_tmpSave(element: tdpdmtim_tmp) {
    this.tdpdmtim_tmpService.FormData = element;
    this.NotificationService.warn(this.tdpdmtim_tmpService.ComponentSaveAll(this.tdpdmtim_tmpSort, this.tdpdmtim_tmpPaginator));
  }
  tdpdmtim_tmpDelete(element: tdpdmtim_tmp) {
    this.tdpdmtim_tmpService.BaseParameter.ID = element.PDTMP_IDX;
    this.NotificationService.warn(this.tdpdmtim_tmpService.ComponentDeleteAll(this.tdpdmtim_tmpSort, this.tdpdmtim_tmpPaginator));
  }
  tdpdmtim_tmpAdd(element: tdpdmtim_tmp) {
    this.tdpdmtim_tmpService.FormData = element;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = environment.DialogConfigWidth;
    dialogConfig.data = { ID: 0 };
    const dialog = this.Dialog.open(tdpdmtim_tmpDetailComponent, dialogConfig);
    dialog.afterClosed().subscribe(() => {
      this.tdpdmtim_tmpSearch();
    });
  }
}
