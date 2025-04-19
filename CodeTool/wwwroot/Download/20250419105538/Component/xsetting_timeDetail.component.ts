import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { xsetting_time } from 'src/app/shared/MES/xsetting_time.model';
import { xsetting_timeService } from 'src/app/shared/MES/xsetting_time.service';

@Component({
  selector: 'app-xsetting_time-info',
  templateUrl: './xsetting_time-info.component.html',
  styleUrls: ['./xsetting_time-info.component.css']
})
export class xsetting_timeDetailComponent implements OnInit {

  constructor(
    public DialogRef: MatDialogRef<xsetting_timeDetailComponent>,    
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public xsetting_timeService: xsetting_timeService,
    ) {
    }

    ngOnInit(): void {

    }
    ngAfterViewInit() {
    //this.xsetting_timeSearch();
    }
    Close() {
    this.DialogRef.close();
    }
    xsetting_timeSearch() {
    this.xsetting_timeService.GetByIDAsync().subscribe(
    res => {
    this.xsetting_timeService.FormData = res as xsetting_time;
    if (this.xsetting_timeService.FormData.SETTING_IDX == environment.InitializationNumber) {
    }
    },
    err => {
    }
    );
    }
    xsetting_timeSave() {
    this.xsetting_timeService.IsShowLoading = true;
    this.xsetting_timeService.SaveAsync().subscribe(
    res => {
    this.xsetting_timeService.FormData = res as xsetting_time;
    this.NotificationService.warn(environment.SaveSuccess);
    },
    err => {
    this.NotificationService.warn(environment.SaveNotSuccess);
    },
    () => {
    this.xsetting_timeService.IsShowLoading = false;
    }
    );
    }
    }

