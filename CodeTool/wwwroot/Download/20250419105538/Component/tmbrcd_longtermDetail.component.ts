import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { tmbrcd_longterm } from 'src/app/shared/MES/tmbrcd_longterm.model';
import { tmbrcd_longtermService } from 'src/app/shared/MES/tmbrcd_longterm.service';

@Component({
  selector: 'app-tmbrcd_longterm-info',
  templateUrl: './tmbrcd_longterm-info.component.html',
  styleUrls: ['./tmbrcd_longterm-info.component.css']
})
export class tmbrcd_longtermDetailComponent implements OnInit {

  constructor(
    public DialogRef: MatDialogRef<tmbrcd_longtermDetailComponent>,    
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public tmbrcd_longtermService: tmbrcd_longtermService,
    ) {
    }

    ngOnInit(): void {

    }
    ngAfterViewInit() {
    //this.tmbrcd_longtermSearch();
    }
    Close() {
    this.DialogRef.close();
    }
    tmbrcd_longtermSearch() {
    this.tmbrcd_longtermService.GetByIDAsync().subscribe(
    res => {
    this.tmbrcd_longtermService.FormData = res as tmbrcd_longterm;
    if (this.tmbrcd_longtermService.FormData.TMBRCD_LONGTERM_IDX == environment.InitializationNumber) {
    }
    },
    err => {
    }
    );
    }
    tmbrcd_longtermSave() {
    this.tmbrcd_longtermService.IsShowLoading = true;
    this.tmbrcd_longtermService.SaveAsync().subscribe(
    res => {
    this.tmbrcd_longtermService.FormData = res as tmbrcd_longterm;
    this.NotificationService.warn(environment.SaveSuccess);
    },
    err => {
    this.NotificationService.warn(environment.SaveNotSuccess);
    },
    () => {
    this.tmbrcd_longtermService.IsShowLoading = false;
    }
    );
    }
    }

