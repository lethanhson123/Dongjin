import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { torder_barcode_lp } from 'src/app/shared/MES/torder_barcode_lp.model';
import { torder_barcode_lpService } from 'src/app/shared/MES/torder_barcode_lp.service';

@Component({
  selector: 'app-torder_barcode_lp-info',
  templateUrl: './torder_barcode_lp-info.component.html',
  styleUrls: ['./torder_barcode_lp-info.component.css']
})
export class torder_barcode_lpDetailComponent implements OnInit {

  constructor(
    public DialogRef: MatDialogRef<torder_barcode_lpDetailComponent>,    
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public torder_barcode_lpService: torder_barcode_lpService,
    ) {
    }

    ngOnInit(): void {

    }
    ngAfterViewInit() {
    //this.torder_barcode_lpSearch();
    }
    Close() {
    this.DialogRef.close();
    }
    torder_barcode_lpSearch() {
    this.torder_barcode_lpService.GetByIDAsync().subscribe(
    res => {
    this.torder_barcode_lpService.FormData = res as torder_barcode_lp;
    if (this.torder_barcode_lpService.FormData.TORDER_BARCODE_IDX == environment.InitializationNumber) {
    }
    },
    err => {
    }
    );
    }
    torder_barcode_lpSave() {
    this.torder_barcode_lpService.IsShowLoading = true;
    this.torder_barcode_lpService.SaveAsync().subscribe(
    res => {
    this.torder_barcode_lpService.FormData = res as torder_barcode_lp;
    this.NotificationService.warn(environment.SaveSuccess);
    },
    err => {
    this.NotificationService.warn(environment.SaveNotSuccess);
    },
    () => {
    this.torder_barcode_lpService.IsShowLoading = false;
    }
    );
    }
    }

