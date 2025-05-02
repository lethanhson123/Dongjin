import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { torderinspection_lp } from 'src/app/shared/MES/torderinspection_lp.model';
import { torderinspection_lpService } from 'src/app/shared/MES/torderinspection_lp.service';

@Component({
  selector: 'app-torderinspection_lp',
  templateUrl: './torderinspection_lp.component.html',
  styleUrls: ['./torderinspection_lp.component.css']
})
export class torderinspection_lpComponent implements OnInit {

  @ViewChild('torderinspection_lpSort') torderinspection_lpSort: MatSort;
  @ViewChild('torderinspection_lpPaginator') torderinspection_lpPaginator: MatPaginator;

  constructor(
    public Dialog: MatDialog,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public torderinspection_lpService: torderinspection_lpService,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.torderinspection_lpSearch();
  }
  torderinspection_lpSearch() {
    this.torderinspection_lpService.SearchAll(this.torderinspection_lpSort, this.torderinspection_lpPaginator);
  }
  torderinspection_lpSave(element: torderinspection_lp) {
    this.torderinspection_lpService.FormData = element;
    this.NotificationService.warn(this.torderinspection_lpService.ComponentSaveAll(this.torderinspection_lpSort, this.torderinspection_lpPaginator));
  }
  torderinspection_lpDelete(element: torderinspection_lp) {
    this.torderinspection_lpService.BaseParameter.ID = element.INSPECTION_IDX;
    this.NotificationService.warn(this.torderinspection_lpService.ComponentDeleteAll(this.torderinspection_lpSort, this.torderinspection_lpPaginator));
  }
  torderinspection_lpAdd(element: torderinspection_lp) {
    this.torderinspection_lpService.FormData = element;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = environment.DialogConfigWidth;
    dialogConfig.data = { ID: 0 };
    const dialog = this.Dialog.open(torderinspection_lpDetailComponent, dialogConfig);
    dialog.afterClosed().subscribe(() => {
      this.torderinspection_lpSearch();
    });
  }
}
