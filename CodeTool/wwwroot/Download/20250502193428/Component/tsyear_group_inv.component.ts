import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { tsyear_group_inv } from 'src/app/shared/MES/tsyear_group_inv.model';
import { tsyear_group_invService } from 'src/app/shared/MES/tsyear_group_inv.service';

@Component({
  selector: 'app-tsyear_group_inv',
  templateUrl: './tsyear_group_inv.component.html',
  styleUrls: ['./tsyear_group_inv.component.css']
})
export class tsyear_group_invComponent implements OnInit {

  @ViewChild('tsyear_group_invSort') tsyear_group_invSort: MatSort;
  @ViewChild('tsyear_group_invPaginator') tsyear_group_invPaginator: MatPaginator;

  constructor(
    public Dialog: MatDialog,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public tsyear_group_invService: tsyear_group_invService,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.tsyear_group_invSearch();
  }
  tsyear_group_invSearch() {
    this.tsyear_group_invService.SearchAll(this.tsyear_group_invSort, this.tsyear_group_invPaginator);
  }
  tsyear_group_invSave(element: tsyear_group_inv) {
    this.tsyear_group_invService.FormData = element;
    this.NotificationService.warn(this.tsyear_group_invService.ComponentSaveAll(this.tsyear_group_invSort, this.tsyear_group_invPaginator));
  }
  tsyear_group_invDelete(element: tsyear_group_inv) {
    this.tsyear_group_invService.BaseParameter.ID = element.TSYEAR_GROUP_IDX;
    this.NotificationService.warn(this.tsyear_group_invService.ComponentDeleteAll(this.tsyear_group_invSort, this.tsyear_group_invPaginator));
  }
  tsyear_group_invAdd(element: tsyear_group_inv) {
    this.tsyear_group_invService.FormData = element;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = environment.DialogConfigWidth;
    dialogConfig.data = { ID: 0 };
    const dialog = this.Dialog.open(tsyear_group_invDetailComponent, dialogConfig);
    dialog.afterClosed().subscribe(() => {
      this.tsyear_group_invSearch();
    });
  }
}
