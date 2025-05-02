import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { torderlist_wtime } from 'src/app/shared/MES/torderlist_wtime.model';
import { torderlist_wtimeService } from 'src/app/shared/MES/torderlist_wtime.service';

@Component({
  selector: 'app-torderlist_wtime',
  templateUrl: './torderlist_wtime.component.html',
  styleUrls: ['./torderlist_wtime.component.css']
})
export class torderlist_wtimeComponent implements OnInit {

  @ViewChild('torderlist_wtimeSort') torderlist_wtimeSort: MatSort;
  @ViewChild('torderlist_wtimePaginator') torderlist_wtimePaginator: MatPaginator;

  constructor(
    public Dialog: MatDialog,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public torderlist_wtimeService: torderlist_wtimeService,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.torderlist_wtimeSearch();
  }
  torderlist_wtimeSearch() {
    this.torderlist_wtimeService.SearchAll(this.torderlist_wtimeSort, this.torderlist_wtimePaginator);
  }
  torderlist_wtimeSave(element: torderlist_wtime) {
    this.torderlist_wtimeService.FormData = element;
    this.NotificationService.warn(this.torderlist_wtimeService.ComponentSaveAll(this.torderlist_wtimeSort, this.torderlist_wtimePaginator));
  }
  torderlist_wtimeDelete(element: torderlist_wtime) {
    this.torderlist_wtimeService.BaseParameter.ID = element.TOWT_INDX;
    this.NotificationService.warn(this.torderlist_wtimeService.ComponentDeleteAll(this.torderlist_wtimeSort, this.torderlist_wtimePaginator));
  }
  torderlist_wtimeAdd(element: torderlist_wtime) {
    this.torderlist_wtimeService.FormData = element;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = environment.DialogConfigWidth;
    dialogConfig.data = { ID: 0 };
    const dialog = this.Dialog.open(torderlist_wtimeDetailComponent, dialogConfig);
    dialog.afterClosed().subscribe(() => {
      this.torderlist_wtimeSearch();
    });
  }
}
