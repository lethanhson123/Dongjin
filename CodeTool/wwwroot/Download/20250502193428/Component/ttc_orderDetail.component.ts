import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { ttc_order } from 'src/app/shared/MES/ttc_order.model';
import { ttc_orderService } from 'src/app/shared/MES/ttc_order.service';

@Component({
  selector: 'app-ttc_order-info',
  templateUrl: './ttc_order-info.component.html',
  styleUrls: ['./ttc_order-info.component.css']
})
export class ttc_orderDetailComponent implements OnInit {

  constructor(
    public DialogRef: MatDialogRef<ttc_orderDetailComponent>,    
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public ttc_orderService: ttc_orderService,
    ) {
    }

    ngOnInit(): void {

    }
    ngAfterViewInit() {
    //this.ttc_orderSearch();
    }
    Close() {
    this.DialogRef.close();
    }
    ttc_orderSearch() {
    this.ttc_orderService.GetByIDAsync().subscribe(
    res => {
    this.ttc_orderService.FormData = res as ttc_order;
    if (this.ttc_orderService.FormData.TTC_PO_INX == environment.InitializationNumber) {
    }
    },
    err => {
    }
    );
    }
    ttc_orderSave() {
    this.ttc_orderService.IsShowLoading = true;
    this.ttc_orderService.SaveAsync().subscribe(
    res => {
    this.ttc_orderService.FormData = res as ttc_order;
    this.NotificationService.warn(environment.SaveSuccess);
    },
    err => {
    this.NotificationService.warn(environment.SaveNotSuccess);
    },
    () => {
    this.ttc_orderService.IsShowLoading = false;
    }
    );
    }
    }

