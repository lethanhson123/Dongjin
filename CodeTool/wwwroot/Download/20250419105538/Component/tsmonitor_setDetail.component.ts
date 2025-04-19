import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { tsmonitor_set } from 'src/app/shared/MES/tsmonitor_set.model';
import { tsmonitor_setService } from 'src/app/shared/MES/tsmonitor_set.service';

@Component({
  selector: 'app-tsmonitor_set-info',
  templateUrl: './tsmonitor_set-info.component.html',
  styleUrls: ['./tsmonitor_set-info.component.css']
})
export class tsmonitor_setDetailComponent implements OnInit {

  constructor(
    public DialogRef: MatDialogRef<tsmonitor_setDetailComponent>,    
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public tsmonitor_setService: tsmonitor_setService,
    ) {
    }

    ngOnInit(): void {

    }
    ngAfterViewInit() {
    //this.tsmonitor_setSearch();
    }
    Close() {
    this.DialogRef.close();
    }
    tsmonitor_setSearch() {
    this.tsmonitor_setService.GetByIDAsync().subscribe(
    res => {
    this.tsmonitor_setService.FormData = res as tsmonitor_set;
    if (this.tsmonitor_setService.FormData.TSMONITOR_SET_IDX == environment.InitializationNumber) {
    }
    },
    err => {
    }
    );
    }
    tsmonitor_setSave() {
    this.tsmonitor_setService.IsShowLoading = true;
    this.tsmonitor_setService.SaveAsync().subscribe(
    res => {
    this.tsmonitor_setService.FormData = res as tsmonitor_set;
    this.NotificationService.warn(environment.SaveSuccess);
    },
    err => {
    this.NotificationService.warn(environment.SaveNotSuccess);
    },
    () => {
    this.tsmonitor_setService.IsShowLoading = false;
    }
    );
    }
    }

