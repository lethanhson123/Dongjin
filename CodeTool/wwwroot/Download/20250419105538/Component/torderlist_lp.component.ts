import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { torderlist_lp } from 'src/app/shared/MES/torderlist_lp.model';
import { torderlist_lpService } from 'src/app/shared/MES/torderlist_lp.service';

@Component({
  selector: 'app-torderlist_lp',
  templateUrl: './torderlist_lp.component.html',
  styleUrls: ['./torderlist_lp.component.css']
})
export class torderlist_lpComponent implements OnInit {

  @ViewChild('torderlist_lpSort') torderlist_lpSort: MatSort;
  @ViewChild('torderlist_lpPaginator') torderlist_lpPaginator: MatPaginator;

  constructor(
    public Dialog: MatDialog,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public torderlist_lpService: torderlist_lpService,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.torderlist_lpSearch();
  }
  torderlist_lpSearch() {
    this.torderlist_lpService.SearchAll(this.torderlist_lpSort, this.torderlist_lpPaginator);
  }
  torderlist_lpSave(element: torderlist_lp) {
    this.torderlist_lpService.FormData = element;
    this.NotificationService.warn(this.torderlist_lpService.ComponentSaveAll(this.torderlist_lpSort, this.torderlist_lpPaginator));
  }
  torderlist_lpDelete(element: torderlist_lp) {
    this.torderlist_lpService.BaseParameter.ID = element.ORDER_IDX;
    this.NotificationService.warn(this.torderlist_lpService.ComponentDeleteAll(this.torderlist_lpSort, this.torderlist_lpPaginator));
  }
  torderlist_lpAdd(element: torderlist_lp) {
    this.torderlist_lpService.FormData = element;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = environment.DialogConfigWidth;
    dialogConfig.data = { ID: 0 };
    const dialog = this.Dialog.open(torderlist_lpDetailComponent, dialogConfig);
    dialog.afterClosed().subscribe(() => {
      this.torderlist_lpSearch();
    });
  }
}
