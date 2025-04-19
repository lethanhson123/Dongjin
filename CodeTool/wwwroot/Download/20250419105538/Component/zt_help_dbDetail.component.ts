import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { zt_help_db } from 'src/app/shared/MES/zt_help_db.model';
import { zt_help_dbService } from 'src/app/shared/MES/zt_help_db.service';

@Component({
  selector: 'app-zt_help_db-info',
  templateUrl: './zt_help_db-info.component.html',
  styleUrls: ['./zt_help_db-info.component.css']
})
export class zt_help_dbDetailComponent implements OnInit {

  constructor(
    public DialogRef: MatDialogRef<zt_help_dbDetailComponent>,    
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public zt_help_dbService: zt_help_dbService,
    ) {
    }

    ngOnInit(): void {

    }
    ngAfterViewInit() {
    //this.zt_help_dbSearch();
    }
    Close() {
    this.DialogRef.close();
    }
    zt_help_dbSearch() {
    this.zt_help_dbService.GetByIDAsync().subscribe(
    res => {
    this.zt_help_dbService.FormData = res as zt_help_db;
    if (this.zt_help_dbService.FormData.IDX == environment.InitializationNumber) {
    }
    },
    err => {
    }
    );
    }
    zt_help_dbSave() {
    this.zt_help_dbService.IsShowLoading = true;
    this.zt_help_dbService.SaveAsync().subscribe(
    res => {
    this.zt_help_dbService.FormData = res as zt_help_db;
    this.NotificationService.warn(environment.SaveSuccess);
    },
    err => {
    this.NotificationService.warn(environment.SaveNotSuccess);
    },
    () => {
    this.zt_help_dbService.IsShowLoading = false;
    }
    );
    }
    }

