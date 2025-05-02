import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { kr_tdpdmtim } from 'src/app/shared/MES/kr_tdpdmtim.model';
import { kr_tdpdmtimService } from 'src/app/shared/MES/kr_tdpdmtim.service';

@Component({
  selector: 'app-kr_tdpdmtim-info',
  templateUrl: './kr_tdpdmtim-info.component.html',
  styleUrls: ['./kr_tdpdmtim-info.component.css']
})
export class kr_tdpdmtimDetailComponent implements OnInit {

  constructor(
    public DialogRef: MatDialogRef<kr_tdpdmtimDetailComponent>,    
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public kr_tdpdmtimService: kr_tdpdmtimService,
    ) {
    }

    ngOnInit(): void {

    }
    ngAfterViewInit() {
    //this.kr_tdpdmtimSearch();
    }
    Close() {
    this.DialogRef.close();
    }
    kr_tdpdmtimSearch() {
    this.kr_tdpdmtimService.GetByIDAsync().subscribe(
    res => {
    this.kr_tdpdmtimService.FormData = res as kr_tdpdmtim;
    if (this.kr_tdpdmtimService.FormData.PDMTIN_IDX == environment.InitializationNumber) {
    }
    },
    err => {
    }
    );
    }
    kr_tdpdmtimSave() {
    this.kr_tdpdmtimService.IsShowLoading = true;
    this.kr_tdpdmtimService.SaveAsync().subscribe(
    res => {
    this.kr_tdpdmtimService.FormData = res as kr_tdpdmtim;
    this.NotificationService.warn(environment.SaveSuccess);
    },
    err => {
    this.NotificationService.warn(environment.SaveNotSuccess);
    },
    () => {
    this.kr_tdpdmtimService.IsShowLoading = false;
    }
    );
    }
    }

