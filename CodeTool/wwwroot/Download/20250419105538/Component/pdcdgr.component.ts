import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { pdcdgr } from 'src/app/shared/MES/pdcdgr.model';
import { pdcdgrService } from 'src/app/shared/MES/pdcdgr.service';

@Component({
  selector: 'app-pdcdgr',
  templateUrl: './pdcdgr.component.html',
  styleUrls: ['./pdcdgr.component.css']
})
export class pdcdgrComponent implements OnInit {

  @ViewChild('pdcdgrSort') pdcdgrSort: MatSort;
  @ViewChild('pdcdgrPaginator') pdcdgrPaginator: MatPaginator;

  constructor(
    public Dialog: MatDialog,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public pdcdgrService: pdcdgrService,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.pdcdgrSearch();
  }
  pdcdgrSearch() {
    this.pdcdgrService.SearchAll(this.pdcdgrSort, this.pdcdgrPaginator);
  }
  pdcdgrSave(element: pdcdgr) {
    this.pdcdgrService.FormData = element;
    this.NotificationService.warn(this.pdcdgrService.ComponentSaveAll(this.pdcdgrSort, this.pdcdgrPaginator));
  }
  pdcdgrDelete(element: pdcdgr) {
    this.pdcdgrService.BaseParameter.ID = element.CDGR_IDX;
    this.NotificationService.warn(this.pdcdgrService.ComponentDeleteAll(this.pdcdgrSort, this.pdcdgrPaginator));
  }
  pdcdgrAdd(element: pdcdgr) {
    this.pdcdgrService.FormData = element;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = environment.DialogConfigWidth;
    dialogConfig.data = { ID: 0 };
    const dialog = this.Dialog.open(pdcdgrDetailComponent, dialogConfig);
    dialog.afterClosed().subscribe(() => {
      this.pdcdgrSearch();
    });
  }
}
