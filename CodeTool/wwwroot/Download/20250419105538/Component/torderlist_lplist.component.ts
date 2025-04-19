import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { torderlist_lplist } from 'src/app/shared/MES/torderlist_lplist.model';
import { torderlist_lplistService } from 'src/app/shared/MES/torderlist_lplist.service';

@Component({
  selector: 'app-torderlist_lplist',
  templateUrl: './torderlist_lplist.component.html',
  styleUrls: ['./torderlist_lplist.component.css']
})
export class torderlist_lplistComponent implements OnInit {

  @ViewChild('torderlist_lplistSort') torderlist_lplistSort: MatSort;
  @ViewChild('torderlist_lplistPaginator') torderlist_lplistPaginator: MatPaginator;

  constructor(
    public Dialog: MatDialog,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public torderlist_lplistService: torderlist_lplistService,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.torderlist_lplistSearch();
  }
  torderlist_lplistSearch() {
    this.torderlist_lplistService.SearchAll(this.torderlist_lplistSort, this.torderlist_lplistPaginator);
  }
  torderlist_lplistSave(element: torderlist_lplist) {
    this.torderlist_lplistService.FormData = element;
    this.NotificationService.warn(this.torderlist_lplistService.ComponentSaveAll(this.torderlist_lplistSort, this.torderlist_lplistPaginator));
  }
  torderlist_lplistDelete(element: torderlist_lplist) {
    this.torderlist_lplistService.BaseParameter.ID = element.TORDERLIST_LPLIST_IDX;
    this.NotificationService.warn(this.torderlist_lplistService.ComponentDeleteAll(this.torderlist_lplistSort, this.torderlist_lplistPaginator));
  }
  torderlist_lplistAdd(element: torderlist_lplist) {
    this.torderlist_lplistService.FormData = element;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = environment.DialogConfigWidth;
    dialogConfig.data = { ID: 0 };
    const dialog = this.Dialog.open(torderlist_lplistDetailComponent, dialogConfig);
    dialog.afterClosed().subscribe(() => {
      this.torderlist_lplistSearch();
    });
  }
}
