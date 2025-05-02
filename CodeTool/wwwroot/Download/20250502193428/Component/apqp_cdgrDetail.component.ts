import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { apqp_cdgr } from 'src/app/shared/MES/apqp_cdgr.model';
import { apqp_cdgrService } from 'src/app/shared/MES/apqp_cdgr.service';

@Component({
  selector: 'app-apqp_cdgr-info',
  templateUrl: './apqp_cdgr-info.component.html',
  styleUrls: ['./apqp_cdgr-info.component.css']
})
export class apqp_cdgrDetailComponent implements OnInit {

  constructor(
    public DialogRef: MatDialogRef<apqp_cdgrDetailComponent>,    
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public apqp_cdgrService: apqp_cdgrService,
    ) {
    }

    ngOnInit(): void {

    }
    ngAfterViewInit() {
    //this.apqp_cdgrSearch();
    }
    Close() {
    this.DialogRef.close();
    }
    apqp_cdgrSearch() {
    this.apqp_cdgrService.GetByIDAsync().subscribe(
    res => {
    this.apqp_cdgrService.FormData = res as apqp_cdgr;
    if (this.apqp_cdgrService.FormData.CDGR_IDX == environment.InitializationNumber) {
    }
    },
    err => {
    }
    );
    }
    apqp_cdgrSave() {
    this.apqp_cdgrService.IsShowLoading = true;
    this.apqp_cdgrService.SaveAsync().subscribe(
    res => {
    this.apqp_cdgrService.FormData = res as apqp_cdgr;
    this.NotificationService.warn(environment.SaveSuccess);
    },
    err => {
    this.NotificationService.warn(environment.SaveNotSuccess);
    },
    () => {
    this.apqp_cdgrService.IsShowLoading = false;
    }
    );
    }
    }

