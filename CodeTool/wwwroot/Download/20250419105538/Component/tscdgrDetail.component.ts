import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { tscdgr } from 'src/app/shared/MES/tscdgr.model';
import { tscdgrService } from 'src/app/shared/MES/tscdgr.service';

@Component({
  selector: 'app-tscdgr-info',
  templateUrl: './tscdgr-info.component.html',
  styleUrls: ['./tscdgr-info.component.css']
})
export class tscdgrDetailComponent implements OnInit {

  constructor(
    public DialogRef: MatDialogRef<tscdgrDetailComponent>,    
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public tscdgrService: tscdgrService,
    ) {
    }

    ngOnInit(): void {

    }
    ngAfterViewInit() {
    //this.tscdgrSearch();
    }
    Close() {
    this.DialogRef.close();
    }
    tscdgrSearch() {
    this.tscdgrService.GetByIDAsync().subscribe(
    res => {
    this.tscdgrService.FormData = res as tscdgr;
    if (this.tscdgrService.FormData.CDGR_IDX == environment.InitializationNumber) {
    }
    },
    err => {
    }
    );
    }
    tscdgrSave() {
    this.tscdgrService.IsShowLoading = true;
    this.tscdgrService.SaveAsync().subscribe(
    res => {
    this.tscdgrService.FormData = res as tscdgr;
    this.NotificationService.warn(environment.SaveSuccess);
    },
    err => {
    this.NotificationService.warn(environment.SaveNotSuccess);
    },
    () => {
    this.tscdgrService.IsShowLoading = false;
    }
    );
    }
    }

