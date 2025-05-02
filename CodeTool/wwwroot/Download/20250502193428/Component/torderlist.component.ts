import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { torderlist } from 'src/app/shared/MES/torderlist.model';
import { torderlistService } from 'src/app/shared/MES/torderlist.service';

@Component({
  selector: 'app-torderlist',
  templateUrl: './torderlist.component.html',
  styleUrls: ['./torderlist.component.css']
})
export class torderlistComponent implements OnInit {

  @ViewChild('torderlistSort') torderlistSort: MatSort;
  @ViewChild('torderlistPaginator') torderlistPaginator: MatPaginator;

  constructor(
    public Dialog: MatDialog,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public torderlistService: torderlistService,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.torderlistSearch();
  }
  torderlistSearch() {
    this.torderlistService.SearchAll(this.torderlistSort, this.torderlistPaginator);
  }
  torderlistSave(element: torderlist) {
    this.torderlistService.FormData = element;
    this.NotificationService.warn(this.torderlistService.ComponentSaveAll(this.torderlistSort, this.torderlistPaginator));
  }
  torderlistDelete(element: torderlist) {
    this.torderlistService.BaseParameter.ID = element.ORDER_IDX;
    this.NotificationService.warn(this.torderlistService.ComponentDeleteAll(this.torderlistSort, this.torderlistPaginator));
  }
  torderlistAdd(element: torderlist) {
    this.torderlistService.FormData = element;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = environment.DialogConfigWidth;
    dialogConfig.data = { ID: 0 };
    const dialog = this.Dialog.open(torderlistDetailComponent, dialogConfig);
    dialog.afterClosed().subscribe(() => {
      this.torderlistSearch();
    });
  }
}
