import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { torderinspection_lp } from 'src/app/shared/MES/torderinspection_lp.model';
import { torderinspection_lpService } from 'src/app/shared/MES/torderinspection_lp.service';

@Component({
  selector: 'app-torderinspection_lp-info',
  templateUrl: './torderinspection_lp-info.component.html',
  styleUrls: ['./torderinspection_lp-info.component.css']
})
export class torderinspection_lpDetailComponent implements OnInit {

  constructor(
    public DialogRef: MatDialogRef<torderinspection_lpDetailComponent>,    
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public torderinspection_lpService: torderinspection_lpService,
    ) {
    }

    ngOnInit(): void {

    }
    ngAfterViewInit() {
    //this.torderinspection_lpSearch();
    }
    Close() {
    this.DialogRef.close();
    }
    torderinspection_lpSearch() {
    this.torderinspection_lpService.GetByIDAsync().subscribe(
    res => {
    this.torderinspection_lpService.FormData = res as torderinspection_lp;
    if (this.torderinspection_lpService.FormData.INSPECTION_IDX == environment.InitializationNumber) {
    }
    },
    err => {
    }
    );
    }
    torderinspection_lpSave() {
    this.torderinspection_lpService.IsShowLoading = true;
    this.torderinspection_lpService.SaveAsync().subscribe(
    res => {
    this.torderinspection_lpService.FormData = res as torderinspection_lp;
    this.NotificationService.warn(environment.SaveSuccess);
    },
    err => {
    this.NotificationService.warn(environment.SaveNotSuccess);
    },
    () => {
    this.torderinspection_lpService.IsShowLoading = false;
    }
    );
    }
    }

