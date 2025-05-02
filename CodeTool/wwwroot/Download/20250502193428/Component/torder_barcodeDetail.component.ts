import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { torder_barcode } from 'src/app/shared/MES/torder_barcode.model';
import { torder_barcodeService } from 'src/app/shared/MES/torder_barcode.service';

@Component({
  selector: 'app-torder_barcode-info',
  templateUrl: './torder_barcode-info.component.html',
  styleUrls: ['./torder_barcode-info.component.css']
})
export class torder_barcodeDetailComponent implements OnInit {

  constructor(
    public DialogRef: MatDialogRef<torder_barcodeDetailComponent>,    
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public torder_barcodeService: torder_barcodeService,
    ) {
    }

    ngOnInit(): void {

    }
    ngAfterViewInit() {
    //this.torder_barcodeSearch();
    }
    Close() {
    this.DialogRef.close();
    }
    torder_barcodeSearch() {
    this.torder_barcodeService.GetByIDAsync().subscribe(
    res => {
    this.torder_barcodeService.FormData = res as torder_barcode;
    if (this.torder_barcodeService.FormData.TORDER_BARCODE_IDX == environment.InitializationNumber) {
    }
    },
    err => {
    }
    );
    }
    torder_barcodeSave() {
    this.torder_barcodeService.IsShowLoading = true;
    this.torder_barcodeService.SaveAsync().subscribe(
    res => {
    this.torder_barcodeService.FormData = res as torder_barcode;
    this.NotificationService.warn(environment.SaveSuccess);
    },
    err => {
    this.NotificationService.warn(environment.SaveNotSuccess);
    },
    () => {
    this.torder_barcodeService.IsShowLoading = false;
    }
    );
    }
    }

