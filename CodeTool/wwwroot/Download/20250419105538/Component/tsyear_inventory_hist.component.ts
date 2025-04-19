import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { tsyear_inventory_hist } from 'src/app/shared/MES/tsyear_inventory_hist.model';
import { tsyear_inventory_histService } from 'src/app/shared/MES/tsyear_inventory_hist.service';

@Component({
  selector: 'app-tsyear_inventory_hist',
  templateUrl: './tsyear_inventory_hist.component.html',
  styleUrls: ['./tsyear_inventory_hist.component.css']
})
export class tsyear_inventory_histComponent implements OnInit {

  @ViewChild('tsyear_inventory_histSort') tsyear_inventory_histSort: MatSort;
  @ViewChild('tsyear_inventory_histPaginator') tsyear_inventory_histPaginator: MatPaginator;

  constructor(
    public Dialog: MatDialog,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public tsyear_inventory_histService: tsyear_inventory_histService,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.tsyear_inventory_histSearch();
  }
  tsyear_inventory_histSearch() {
    this.tsyear_inventory_histService.SearchAll(this.tsyear_inventory_histSort, this.tsyear_inventory_histPaginator);
  }
  tsyear_inventory_histSave(element: tsyear_inventory_hist) {
    this.tsyear_inventory_histService.FormData = element;
    this.NotificationService.warn(this.tsyear_inventory_histService.ComponentSaveAll(this.tsyear_inventory_histSort, this.tsyear_inventory_histPaginator));
  }
  tsyear_inventory_histDelete(element: tsyear_inventory_hist) {
    this.tsyear_inventory_histService.BaseParameter.ID = element.TSYEAR_INV_IDX;
    this.NotificationService.warn(this.tsyear_inventory_histService.ComponentDeleteAll(this.tsyear_inventory_histSort, this.tsyear_inventory_histPaginator));
  }
  tsyear_inventory_histAdd(element: tsyear_inventory_hist) {
    this.tsyear_inventory_histService.FormData = element;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = environment.DialogConfigWidth;
    dialogConfig.data = { ID: 0 };
    const dialog = this.Dialog.open(tsyear_inventory_histDetailComponent, dialogConfig);
    dialog.afterClosed().subscribe(() => {
      this.tsyear_inventory_histSearch();
    });
  }
}
