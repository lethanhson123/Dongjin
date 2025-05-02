import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { twwkar_lp } from 'src/app/shared/MES/twwkar_lp.model';
import { twwkar_lpService } from 'src/app/shared/MES/twwkar_lp.service';

@Component({
  selector: 'app-twwkar_lp',
  templateUrl: './twwkar_lp.component.html',
  styleUrls: ['./twwkar_lp.component.css']
})
export class twwkar_lpComponent implements OnInit {

  @ViewChild('twwkar_lpSort') twwkar_lpSort: MatSort;
  @ViewChild('twwkar_lpPaginator') twwkar_lpPaginator: MatPaginator;

  constructor(
    public Dialog: MatDialog,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public twwkar_lpService: twwkar_lpService,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.twwkar_lpSearch();
  }
  twwkar_lpSearch() {
    this.twwkar_lpService.SearchAll(this.twwkar_lpSort, this.twwkar_lpPaginator);
  }
  twwkar_lpSave(element: twwkar_lp) {
    this.twwkar_lpService.FormData = element;
    this.NotificationService.warn(this.twwkar_lpService.ComponentSaveAll(this.twwkar_lpSort, this.twwkar_lpPaginator));
  }
  twwkar_lpDelete(element: twwkar_lp) {
    this.twwkar_lpService.BaseParameter.ID = element.WK_IDX;
    this.NotificationService.warn(this.twwkar_lpService.ComponentDeleteAll(this.twwkar_lpSort, this.twwkar_lpPaginator));
  }
  twwkar_lpAdd(element: twwkar_lp) {
    this.twwkar_lpService.FormData = element;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = environment.DialogConfigWidth;
    dialogConfig.data = { ID: 0 };
    const dialog = this.Dialog.open(twwkar_lpDetailComponent, dialogConfig);
    dialog.afterClosed().subscribe(() => {
      this.twwkar_lpSearch();
    });
  }
}
