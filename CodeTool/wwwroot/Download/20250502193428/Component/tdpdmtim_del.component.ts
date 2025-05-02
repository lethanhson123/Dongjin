import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { tdpdmtim_del } from 'src/app/shared/MES/tdpdmtim_del.model';
import { tdpdmtim_delService } from 'src/app/shared/MES/tdpdmtim_del.service';

@Component({
  selector: 'app-tdpdmtim_del',
  templateUrl: './tdpdmtim_del.component.html',
  styleUrls: ['./tdpdmtim_del.component.css']
})
export class tdpdmtim_delComponent implements OnInit {

  @ViewChild('tdpdmtim_delSort') tdpdmtim_delSort: MatSort;
  @ViewChild('tdpdmtim_delPaginator') tdpdmtim_delPaginator: MatPaginator;

  constructor(
    public Dialog: MatDialog,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public tdpdmtim_delService: tdpdmtim_delService,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.tdpdmtim_delSearch();
  }
  tdpdmtim_delSearch() {
    this.tdpdmtim_delService.SearchAll(this.tdpdmtim_delSort, this.tdpdmtim_delPaginator);
  }
  tdpdmtim_delSave(element: tdpdmtim_del) {
    this.tdpdmtim_delService.FormData = element;
    this.NotificationService.warn(this.tdpdmtim_delService.ComponentSaveAll(this.tdpdmtim_delSort, this.tdpdmtim_delPaginator));
  }
  tdpdmtim_delDelete(element: tdpdmtim_del) {
    this.tdpdmtim_delService.BaseParameter.ID = element.PDMTIN_IDX;
    this.NotificationService.warn(this.tdpdmtim_delService.ComponentDeleteAll(this.tdpdmtim_delSort, this.tdpdmtim_delPaginator));
  }
  tdpdmtim_delAdd(element: tdpdmtim_del) {
    this.tdpdmtim_delService.FormData = element;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = environment.DialogConfigWidth;
    dialogConfig.data = { ID: 0 };
    const dialog = this.Dialog.open(tdpdmtim_delDetailComponent, dialogConfig);
    dialog.afterClosed().subscribe(() => {
      this.tdpdmtim_delSearch();
    });
  }
}
