import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { tsyear_inventory_hist } from 'src/app/shared/MES/tsyear_inventory_hist.model';
import { tsyear_inventory_histService } from 'src/app/shared/MES/tsyear_inventory_hist.service';

@Component({
  selector: 'app-tsyear_inventory_hist-info',
  templateUrl: './tsyear_inventory_hist-info.component.html',
  styleUrls: ['./tsyear_inventory_hist-info.component.css']
})
export class tsyear_inventory_histDetailComponent implements OnInit {

  constructor(
    public DialogRef: MatDialogRef<tsyear_inventory_histDetailComponent>,    
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public tsyear_inventory_histService: tsyear_inventory_histService,
    ) {
    }

    ngOnInit(): void {

    }
    ngAfterViewInit() {
    //this.tsyear_inventory_histSearch();
    }
    Close() {
    this.DialogRef.close();
    }
    tsyear_inventory_histSearch() {
    this.tsyear_inventory_histService.GetByIDAsync().subscribe(
    res => {
    this.tsyear_inventory_histService.FormData = res as tsyear_inventory_hist;
    if (this.tsyear_inventory_histService.FormData.TSYEAR_INV_IDX == environment.InitializationNumber) {
    }
    },
    err => {
    }
    );
    }
    tsyear_inventory_histSave() {
    this.tsyear_inventory_histService.IsShowLoading = true;
    this.tsyear_inventory_histService.SaveAsync().subscribe(
    res => {
    this.tsyear_inventory_histService.FormData = res as tsyear_inventory_hist;
    this.NotificationService.warn(environment.SaveSuccess);
    },
    err => {
    this.NotificationService.warn(environment.SaveNotSuccess);
    },
    () => {
    this.tsyear_inventory_histService.IsShowLoading = false;
    }
    );
    }
    }

