import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { ttc_barcode } from 'src/app/shared/MES/ttc_barcode.model';
import { ttc_barcodeService } from 'src/app/shared/MES/ttc_barcode.service';

@Component({
  selector: 'app-ttc_barcode-info',
  templateUrl: './ttc_barcode-info.component.html',
  styleUrls: ['./ttc_barcode-info.component.css']
})
export class ttc_barcodeDetailComponent implements OnInit {

  constructor(
    public DialogRef: MatDialogRef<ttc_barcodeDetailComponent>,    
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public ttc_barcodeService: ttc_barcodeService,
    ) {
    }

    ngOnInit(): void {

    }
    ngAfterViewInit() {
    //this.ttc_barcodeSearch();
    }
    Close() {
    this.DialogRef.close();
    }
    ttc_barcodeSearch() {
    this.ttc_barcodeService.GetByIDAsync().subscribe(
    res => {
    this.ttc_barcodeService.FormData = res as ttc_barcode;
    if (this.ttc_barcodeService.FormData.TTC_BARCODE_IDX == environment.InitializationNumber) {
    }
    },
    err => {
    }
    );
    }
    ttc_barcodeSave() {
    this.ttc_barcodeService.IsShowLoading = true;
    this.ttc_barcodeService.SaveAsync().subscribe(
    res => {
    this.ttc_barcodeService.FormData = res as ttc_barcode;
    this.NotificationService.warn(environment.SaveSuccess);
    },
    err => {
    this.NotificationService.warn(environment.SaveNotSuccess);
    },
    () => {
    this.ttc_barcodeService.IsShowLoading = false;
    }
    );
    }
    }

