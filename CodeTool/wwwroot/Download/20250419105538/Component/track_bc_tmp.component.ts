import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { track_bc_tmp } from 'src/app/shared/MES/track_bc_tmp.model';
import { track_bc_tmpService } from 'src/app/shared/MES/track_bc_tmp.service';

@Component({
  selector: 'app-track_bc_tmp',
  templateUrl: './track_bc_tmp.component.html',
  styleUrls: ['./track_bc_tmp.component.css']
})
export class track_bc_tmpComponent implements OnInit {

  @ViewChild('track_bc_tmpSort') track_bc_tmpSort: MatSort;
  @ViewChild('track_bc_tmpPaginator') track_bc_tmpPaginator: MatPaginator;

  constructor(
    public Dialog: MatDialog,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public track_bc_tmpService: track_bc_tmpService,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.track_bc_tmpSearch();
  }
  track_bc_tmpSearch() {
    this.track_bc_tmpService.SearchAll(this.track_bc_tmpSort, this.track_bc_tmpPaginator);
  }
  track_bc_tmpSave(element: track_bc_tmp) {
    this.track_bc_tmpService.FormData = element;
    this.NotificationService.warn(this.track_bc_tmpService.ComponentSaveAll(this.track_bc_tmpSort, this.track_bc_tmpPaginator));
  }
  track_bc_tmpDelete(element: track_bc_tmp) {
    this.track_bc_tmpService.BaseParameter.ID = element.TRACK_BC_IDX;
    this.NotificationService.warn(this.track_bc_tmpService.ComponentDeleteAll(this.track_bc_tmpSort, this.track_bc_tmpPaginator));
  }
  track_bc_tmpAdd(element: track_bc_tmp) {
    this.track_bc_tmpService.FormData = element;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = environment.DialogConfigWidth;
    dialogConfig.data = { ID: 0 };
    const dialog = this.Dialog.open(track_bc_tmpDetailComponent, dialogConfig);
    dialog.afterClosed().subscribe(() => {
      this.track_bc_tmpSearch();
    });
  }
}
