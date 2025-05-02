import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { zt_devlpmnt_db } from 'src/app/shared/MES/zt_devlpmnt_db.model';
import { zt_devlpmnt_dbService } from 'src/app/shared/MES/zt_devlpmnt_db.service';

@Component({
  selector: 'app-zt_devlpmnt_db-info',
  templateUrl: './zt_devlpmnt_db-info.component.html',
  styleUrls: ['./zt_devlpmnt_db-info.component.css']
})
export class zt_devlpmnt_dbDetailComponent implements OnInit {

  constructor(
    public DialogRef: MatDialogRef<zt_devlpmnt_dbDetailComponent>,    
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public zt_devlpmnt_dbService: zt_devlpmnt_dbService,
    ) {
    }

    ngOnInit(): void {

    }
    ngAfterViewInit() {
    //this.zt_devlpmnt_dbSearch();
    }
    Close() {
    this.DialogRef.close();
    }
    zt_devlpmnt_dbSearch() {
    this.zt_devlpmnt_dbService.GetByIDAsync().subscribe(
    res => {
    this.zt_devlpmnt_dbService.FormData = res as zt_devlpmnt_db;
    if (this.zt_devlpmnt_dbService.FormData.DELP_IDX == environment.InitializationNumber) {
    }
    },
    err => {
    }
    );
    }
    zt_devlpmnt_dbSave() {
    this.zt_devlpmnt_dbService.IsShowLoading = true;
    this.zt_devlpmnt_dbService.SaveAsync().subscribe(
    res => {
    this.zt_devlpmnt_dbService.FormData = res as zt_devlpmnt_db;
    this.NotificationService.warn(environment.SaveSuccess);
    },
    err => {
    this.NotificationService.warn(environment.SaveNotSuccess);
    },
    () => {
    this.zt_devlpmnt_dbService.IsShowLoading = false;
    }
    );
    }
    }

