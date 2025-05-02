import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { tsnotice } from 'src/app/shared/MES/tsnotice.model';
import { tsnoticeService } from 'src/app/shared/MES/tsnotice.service';

@Component({
  selector: 'app-tsnotice',
  templateUrl: './tsnotice.component.html',
  styleUrls: ['./tsnotice.component.css']
})
export class tsnoticeComponent implements OnInit {

  @ViewChild('tsnoticeSort') tsnoticeSort: MatSort;
  @ViewChild('tsnoticePaginator') tsnoticePaginator: MatPaginator;

  constructor(
    public Dialog: MatDialog,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public tsnoticeService: tsnoticeService,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.tsnoticeSearch();
  }
  tsnoticeSearch() {
    this.tsnoticeService.SearchAll(this.tsnoticeSort, this.tsnoticePaginator);
  }
  tsnoticeSave(element: tsnotice) {
    this.tsnoticeService.FormData = element;
    this.NotificationService.warn(this.tsnoticeService.ComponentSaveAll(this.tsnoticeSort, this.tsnoticePaginator));
  }
  tsnoticeDelete(element: tsnotice) {
    this.tsnoticeService.BaseParameter.ID = element.Notice_IDX;
    this.NotificationService.warn(this.tsnoticeService.ComponentDeleteAll(this.tsnoticeSort, this.tsnoticePaginator));
  }
  tsnoticeAdd(element: tsnotice) {
    this.tsnoticeService.FormData = element;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = environment.DialogConfigWidth;
    dialogConfig.data = { ID: 0 };
    const dialog = this.Dialog.open(tsnoticeDetailComponent, dialogConfig);
    dialog.afterClosed().subscribe(() => {
      this.tsnoticeSearch();
    });
  }
}
