import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { tuser_log_chk } from 'src/app/shared/MES/tuser_log_chk.model';
import { tuser_log_chkService } from 'src/app/shared/MES/tuser_log_chk.service';

@Component({
  selector: 'app-tuser_log_chk-info',
  templateUrl: './tuser_log_chk-info.component.html',
  styleUrls: ['./tuser_log_chk-info.component.css']
})
export class tuser_log_chkDetailComponent implements OnInit {

  constructor(
    public DialogRef: MatDialogRef<tuser_log_chkDetailComponent>,    
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public tuser_log_chkService: tuser_log_chkService,
    ) {
    }

    ngOnInit(): void {

    }
    ngAfterViewInit() {
    //this.tuser_log_chkSearch();
    }
    Close() {
    this.DialogRef.close();
    }
    tuser_log_chkSearch() {
    this.tuser_log_chkService.GetByIDAsync().subscribe(
    res => {
    this.tuser_log_chkService.FormData = res as tuser_log_chk;
    if (this.tuser_log_chkService.FormData.TUSER_IDX == environment.InitializationNumber) {
    }
    },
    err => {
    }
    );
    }
    tuser_log_chkSave() {
    this.tuser_log_chkService.IsShowLoading = true;
    this.tuser_log_chkService.SaveAsync().subscribe(
    res => {
    this.tuser_log_chkService.FormData = res as tuser_log_chk;
    this.NotificationService.warn(environment.SaveSuccess);
    },
    err => {
    this.NotificationService.warn(environment.SaveNotSuccess);
    },
    () => {
    this.tuser_log_chkService.IsShowLoading = false;
    }
    );
    }
    }

