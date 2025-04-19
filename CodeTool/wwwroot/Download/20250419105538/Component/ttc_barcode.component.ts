import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { ttc_barcode } from 'src/app/shared/MES/ttc_barcode.model';
import { ttc_barcodeService } from 'src/app/shared/MES/ttc_barcode.service';

@Component({
  selector: 'app-ttc_barcode',
  templateUrl: './ttc_barcode.component.html',
  styleUrls: ['./ttc_barcode.component.css']
})
export class ttc_barcodeComponent implements OnInit {

  @ViewChild('ttc_barcodeSort') ttc_barcodeSort: MatSort;
  @ViewChild('ttc_barcodePaginator') ttc_barcodePaginator: MatPaginator;

  constructor(
    public Dialog: MatDialog,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public ttc_barcodeService: ttc_barcodeService,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.ttc_barcodeSearch();
  }
  ttc_barcodeSearch() {
    this.ttc_barcodeService.SearchAll(this.ttc_barcodeSort, this.ttc_barcodePaginator);
  }
  ttc_barcodeSave(element: ttc_barcode) {
    this.ttc_barcodeService.FormData = element;
    this.NotificationService.warn(this.ttc_barcodeService.ComponentSaveAll(this.ttc_barcodeSort, this.ttc_barcodePaginator));
  }
  ttc_barcodeDelete(element: ttc_barcode) {
    this.ttc_barcodeService.BaseParameter.ID = element.TTC_BARCODE_IDX;
    this.NotificationService.warn(this.ttc_barcodeService.ComponentDeleteAll(this.ttc_barcodeSort, this.ttc_barcodePaginator));
  }
  ttc_barcodeAdd(element: ttc_barcode) {
    this.ttc_barcodeService.FormData = element;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = environment.DialogConfigWidth;
    dialogConfig.data = { ID: 0 };
    const dialog = this.Dialog.open(ttc_barcodeDetailComponent, dialogConfig);
    dialog.afterClosed().subscribe(() => {
      this.ttc_barcodeSearch();
    });
  }
}
