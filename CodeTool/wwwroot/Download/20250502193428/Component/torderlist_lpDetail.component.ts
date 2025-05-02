import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { torderlist_lp } from 'src/app/shared/MES/torderlist_lp.model';
import { torderlist_lpService } from 'src/app/shared/MES/torderlist_lp.service';

@Component({
  selector: 'app-torderlist_lp-info',
  templateUrl: './torderlist_lp-info.component.html',
  styleUrls: ['./torderlist_lp-info.component.css']
})
export class torderlist_lpDetailComponent implements OnInit {

  constructor(
    public DialogRef: MatDialogRef<torderlist_lpDetailComponent>,    
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public torderlist_lpService: torderlist_lpService,
    ) {
    }

    ngOnInit(): void {

    }
    ngAfterViewInit() {
    //this.torderlist_lpSearch();
    }
    Close() {
    this.DialogRef.close();
    }
    torderlist_lpSearch() {
    this.torderlist_lpService.GetByIDAsync().subscribe(
    res => {
    this.torderlist_lpService.FormData = res as torderlist_lp;
    if (this.torderlist_lpService.FormData.ORDER_IDX == environment.InitializationNumber) {
    }
    },
    err => {
    }
    );
    }
    torderlist_lpSave() {
    this.torderlist_lpService.IsShowLoading = true;
    this.torderlist_lpService.SaveAsync().subscribe(
    res => {
    this.torderlist_lpService.FormData = res as torderlist_lp;
    this.NotificationService.warn(environment.SaveSuccess);
    },
    err => {
    this.NotificationService.warn(environment.SaveNotSuccess);
    },
    () => {
    this.torderlist_lpService.IsShowLoading = false;
    }
    );
    }
    }

