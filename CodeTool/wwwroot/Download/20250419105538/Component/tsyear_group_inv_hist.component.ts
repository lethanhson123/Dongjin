import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { tsyear_group_inv_hist } from 'src/app/shared/MES/tsyear_group_inv_hist.model';
import { tsyear_group_inv_histService } from 'src/app/shared/MES/tsyear_group_inv_hist.service';

@Component({
  selector: 'app-tsyear_group_inv_hist',
  templateUrl: './tsyear_group_inv_hist.component.html',
  styleUrls: ['./tsyear_group_inv_hist.component.css']
})
export class tsyear_group_inv_histComponent implements OnInit {

  @ViewChild('tsyear_group_inv_histSort') tsyear_group_inv_histSort: MatSort;
  @ViewChild('tsyear_group_inv_histPaginator') tsyear_group_inv_histPaginator: MatPaginator;

  constructor(
    public Dialog: MatDialog,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public tsyear_group_inv_histService: tsyear_group_inv_histService,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.tsyear_group_inv_histSearch();
  }
  tsyear_group_inv_histSearch() {
    this.tsyear_group_inv_histService.SearchAll(this.tsyear_group_inv_histSort, this.tsyear_group_inv_histPaginator);
  }
  tsyear_group_inv_histSave(element: tsyear_group_inv_hist) {
    this.tsyear_group_inv_histService.FormData = element;
    this.NotificationService.warn(this.tsyear_group_inv_histService.ComponentSaveAll(this.tsyear_group_inv_histSort, this.tsyear_group_inv_histPaginator));
  }
  tsyear_group_inv_histDelete(element: tsyear_group_inv_hist) {
    this.tsyear_group_inv_histService.BaseParameter.ID = element.TSYEAR_GROUP_IDX;
    this.NotificationService.warn(this.tsyear_group_inv_histService.ComponentDeleteAll(this.tsyear_group_inv_histSort, this.tsyear_group_inv_histPaginator));
  }
  tsyear_group_inv_histAdd(element: tsyear_group_inv_hist) {
    this.tsyear_group_inv_histService.FormData = element;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = environment.DialogConfigWidth;
    dialogConfig.data = { ID: 0 };
    const dialog = this.Dialog.open(tsyear_group_inv_histDetailComponent, dialogConfig);
    dialog.afterClosed().subscribe(() => {
      this.tsyear_group_inv_histSearch();
    });
  }
}
