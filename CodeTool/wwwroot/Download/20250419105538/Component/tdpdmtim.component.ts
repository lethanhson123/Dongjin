import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { tdpdmtim } from 'src/app/shared/MES/tdpdmtim.model';
import { tdpdmtimService } from 'src/app/shared/MES/tdpdmtim.service';

@Component({
  selector: 'app-tdpdmtim',
  templateUrl: './tdpdmtim.component.html',
  styleUrls: ['./tdpdmtim.component.css']
})
export class tdpdmtimComponent implements OnInit {

  @ViewChild('tdpdmtimSort') tdpdmtimSort: MatSort;
  @ViewChild('tdpdmtimPaginator') tdpdmtimPaginator: MatPaginator;

  constructor(
    public Dialog: MatDialog,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public tdpdmtimService: tdpdmtimService,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.tdpdmtimSearch();
  }
  tdpdmtimSearch() {
    this.tdpdmtimService.SearchAll(this.tdpdmtimSort, this.tdpdmtimPaginator);
  }
  tdpdmtimSave(element: tdpdmtim) {
    this.tdpdmtimService.FormData = element;
    this.NotificationService.warn(this.tdpdmtimService.ComponentSaveAll(this.tdpdmtimSort, this.tdpdmtimPaginator));
  }
  tdpdmtimDelete(element: tdpdmtim) {
    this.tdpdmtimService.BaseParameter.ID = element.PDMTIN_IDX;
    this.NotificationService.warn(this.tdpdmtimService.ComponentDeleteAll(this.tdpdmtimSort, this.tdpdmtimPaginator));
  }
  tdpdmtimAdd(element: tdpdmtim) {
    this.tdpdmtimService.FormData = element;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = environment.DialogConfigWidth;
    dialogConfig.data = { ID: 0 };
    const dialog = this.Dialog.open(tdpdmtimDetailComponent, dialogConfig);
    dialog.afterClosed().subscribe(() => {
      this.tdpdmtimSearch();
    });
  }
}
