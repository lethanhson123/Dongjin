import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { tuser_log } from 'src/app/shared/MES/tuser_log.model';
import { tuser_logService } from 'src/app/shared/MES/tuser_log.service';

@Component({
  selector: 'app-tuser_log-info',
  templateUrl: './tuser_log-info.component.html',
  styleUrls: ['./tuser_log-info.component.css']
})
export class tuser_logDetailComponent implements OnInit {

  constructor(
    public DialogRef: MatDialogRef<tuser_logDetailComponent>,    
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public tuser_logService: tuser_logService,
    ) {
    }

    ngOnInit(): void {

    }
    ngAfterViewInit() {
    //this.tuser_logSearch();
    }
    Close() {
    this.DialogRef.close();
    }
    tuser_logSearch() {
    this.tuser_logService.GetByIDAsync().subscribe(
    res => {
    this.tuser_logService.FormData = res as tuser_log;
    if (this.tuser_logService.FormData.TUSER_IDX == environment.InitializationNumber) {
    }
    },
    err => {
    }
    );
    }
    tuser_logSave() {
    this.tuser_logService.IsShowLoading = true;
    this.tuser_logService.SaveAsync().subscribe(
    res => {
    this.tuser_logService.FormData = res as tuser_log;
    this.NotificationService.warn(environment.SaveSuccess);
    },
    err => {
    this.NotificationService.warn(environment.SaveNotSuccess);
    },
    () => {
    this.tuser_logService.IsShowLoading = false;
    }
    );
    }
    }

