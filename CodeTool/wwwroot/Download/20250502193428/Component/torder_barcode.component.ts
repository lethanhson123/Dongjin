import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { torder_barcode } from 'src/app/shared/MES/torder_barcode.model';
import { torder_barcodeService } from 'src/app/shared/MES/torder_barcode.service';

@Component({
  selector: 'app-torder_barcode',
  templateUrl: './torder_barcode.component.html',
  styleUrls: ['./torder_barcode.component.css']
})
export class torder_barcodeComponent implements OnInit {

  @ViewChild('torder_barcodeSort') torder_barcodeSort: MatSort;
  @ViewChild('torder_barcodePaginator') torder_barcodePaginator: MatPaginator;

  constructor(
    public Dialog: MatDialog,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public torder_barcodeService: torder_barcodeService,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.torder_barcodeSearch();
  }
  torder_barcodeSearch() {
    this.torder_barcodeService.SearchAll(this.torder_barcodeSort, this.torder_barcodePaginator);
  }
  torder_barcodeSave(element: torder_barcode) {
    this.torder_barcodeService.FormData = element;
    this.NotificationService.warn(this.torder_barcodeService.ComponentSaveAll(this.torder_barcodeSort, this.torder_barcodePaginator));
  }
  torder_barcodeDelete(element: torder_barcode) {
    this.torder_barcodeService.BaseParameter.ID = element.TORDER_BARCODE_IDX;
    this.NotificationService.warn(this.torder_barcodeService.ComponentDeleteAll(this.torder_barcodeSort, this.torder_barcodePaginator));
  }
  torder_barcodeAdd(element: torder_barcode) {
    this.torder_barcodeService.FormData = element;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = environment.DialogConfigWidth;
    dialogConfig.data = { ID: 0 };
    const dialog = this.Dialog.open(torder_barcodeDetailComponent, dialogConfig);
    dialog.afterClosed().subscribe(() => {
      this.torder_barcodeSearch();
    });
  }
}
