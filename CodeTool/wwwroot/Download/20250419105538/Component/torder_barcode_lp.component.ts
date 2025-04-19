import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { torder_barcode_lp } from 'src/app/shared/MES/torder_barcode_lp.model';
import { torder_barcode_lpService } from 'src/app/shared/MES/torder_barcode_lp.service';

@Component({
  selector: 'app-torder_barcode_lp',
  templateUrl: './torder_barcode_lp.component.html',
  styleUrls: ['./torder_barcode_lp.component.css']
})
export class torder_barcode_lpComponent implements OnInit {

  @ViewChild('torder_barcode_lpSort') torder_barcode_lpSort: MatSort;
  @ViewChild('torder_barcode_lpPaginator') torder_barcode_lpPaginator: MatPaginator;

  constructor(
    public Dialog: MatDialog,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public torder_barcode_lpService: torder_barcode_lpService,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.torder_barcode_lpSearch();
  }
  torder_barcode_lpSearch() {
    this.torder_barcode_lpService.SearchAll(this.torder_barcode_lpSort, this.torder_barcode_lpPaginator);
  }
  torder_barcode_lpSave(element: torder_barcode_lp) {
    this.torder_barcode_lpService.FormData = element;
    this.NotificationService.warn(this.torder_barcode_lpService.ComponentSaveAll(this.torder_barcode_lpSort, this.torder_barcode_lpPaginator));
  }
  torder_barcode_lpDelete(element: torder_barcode_lp) {
    this.torder_barcode_lpService.BaseParameter.ID = element.TORDER_BARCODE_IDX;
    this.NotificationService.warn(this.torder_barcode_lpService.ComponentDeleteAll(this.torder_barcode_lpSort, this.torder_barcode_lpPaginator));
  }
  torder_barcode_lpAdd(element: torder_barcode_lp) {
    this.torder_barcode_lpService.FormData = element;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = environment.DialogConfigWidth;
    dialogConfig.data = { ID: 0 };
    const dialog = this.Dialog.open(torder_barcode_lpDetailComponent, dialogConfig);
    dialog.afterClosed().subscribe(() => {
      this.torder_barcode_lpSearch();
    });
  }
}
