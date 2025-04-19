import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { kr_tdpdmtim_tmp } from 'src/app/shared/MES/kr_tdpdmtim_tmp.model';
import { kr_tdpdmtim_tmpService } from 'src/app/shared/MES/kr_tdpdmtim_tmp.service';

@Component({
  selector: 'app-kr_tdpdmtim_tmp-info',
  templateUrl: './kr_tdpdmtim_tmp-info.component.html',
  styleUrls: ['./kr_tdpdmtim_tmp-info.component.css']
})
export class kr_tdpdmtim_tmpDetailComponent implements OnInit {

  constructor(
    public DialogRef: MatDialogRef<kr_tdpdmtim_tmpDetailComponent>,    
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public kr_tdpdmtim_tmpService: kr_tdpdmtim_tmpService,
    ) {
    }

    ngOnInit(): void {

    }
    ngAfterViewInit() {
    //this.kr_tdpdmtim_tmpSearch();
    }
    Close() {
    this.DialogRef.close();
    }
    kr_tdpdmtim_tmpSearch() {
    this.kr_tdpdmtim_tmpService.GetByIDAsync().subscribe(
    res => {
    this.kr_tdpdmtim_tmpService.FormData = res as kr_tdpdmtim_tmp;
    if (this.kr_tdpdmtim_tmpService.FormData.KR_TDPDMTIN_IDX == environment.InitializationNumber) {
    }
    },
    err => {
    }
    );
    }
    kr_tdpdmtim_tmpSave() {
    this.kr_tdpdmtim_tmpService.IsShowLoading = true;
    this.kr_tdpdmtim_tmpService.SaveAsync().subscribe(
    res => {
    this.kr_tdpdmtim_tmpService.FormData = res as kr_tdpdmtim_tmp;
    this.NotificationService.warn(environment.SaveSuccess);
    },
    err => {
    this.NotificationService.warn(environment.SaveNotSuccess);
    },
    () => {
    this.kr_tdpdmtim_tmpService.IsShowLoading = false;
    }
    );
    }
    }

