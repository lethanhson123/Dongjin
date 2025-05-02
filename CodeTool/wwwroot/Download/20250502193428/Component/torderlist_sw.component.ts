import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { torderlist_sw } from 'src/app/shared/MES/torderlist_sw.model';
import { torderlist_swService } from 'src/app/shared/MES/torderlist_sw.service';

@Component({
  selector: 'app-torderlist_sw',
  templateUrl: './torderlist_sw.component.html',
  styleUrls: ['./torderlist_sw.component.css']
})
export class torderlist_swComponent implements OnInit {

  @ViewChild('torderlist_swSort') torderlist_swSort: MatSort;
  @ViewChild('torderlist_swPaginator') torderlist_swPaginator: MatPaginator;

  constructor(
    public Dialog: MatDialog,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public torderlist_swService: torderlist_swService,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.torderlist_swSearch();
  }
  torderlist_swSearch() {
    this.torderlist_swService.SearchAll(this.torderlist_swSort, this.torderlist_swPaginator);
  }
  torderlist_swSave(element: torderlist_sw) {
    this.torderlist_swService.FormData = element;
    this.NotificationService.warn(this.torderlist_swService.ComponentSaveAll(this.torderlist_swSort, this.torderlist_swPaginator));
  }
  torderlist_swDelete(element: torderlist_sw) {
    this.torderlist_swService.BaseParameter.ID = element.ORDER_IDX;
    this.NotificationService.warn(this.torderlist_swService.ComponentDeleteAll(this.torderlist_swSort, this.torderlist_swPaginator));
  }
  torderlist_swAdd(element: torderlist_sw) {
    this.torderlist_swService.FormData = element;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = environment.DialogConfigWidth;
    dialogConfig.data = { ID: 0 };
    const dialog = this.Dialog.open(torderlist_swDetailComponent, dialogConfig);
    dialog.afterClosed().subscribe(() => {
      this.torderlist_swSearch();
    });
  }
}
