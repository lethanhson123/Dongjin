import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { tsnotice } from 'src/app/shared/MES/tsnotice.model';
import { tsnoticeService } from 'src/app/shared/MES/tsnotice.service';

@Component({
  selector: 'app-tsnotice-info',
  templateUrl: './tsnotice-info.component.html',
  styleUrls: ['./tsnotice-info.component.css']
})
export class tsnoticeDetailComponent implements OnInit {

  constructor(
    public DialogRef: MatDialogRef<tsnoticeDetailComponent>,    
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public tsnoticeService: tsnoticeService,
    ) {
    }

    ngOnInit(): void {

    }
    ngAfterViewInit() {
    //this.tsnoticeSearch();
    }
    Close() {
    this.DialogRef.close();
    }
    tsnoticeSearch() {
    this.tsnoticeService.GetByIDAsync().subscribe(
    res => {
    this.tsnoticeService.FormData = res as tsnotice;
    if (this.tsnoticeService.FormData.Notice_IDX == environment.InitializationNumber) {
    }
    },
    err => {
    }
    );
    }
    tsnoticeSave() {
    this.tsnoticeService.IsShowLoading = true;
    this.tsnoticeService.SaveAsync().subscribe(
    res => {
    this.tsnoticeService.FormData = res as tsnotice;
    this.NotificationService.warn(environment.SaveSuccess);
    },
    err => {
    this.NotificationService.warn(environment.SaveNotSuccess);
    },
    () => {
    this.tsnoticeService.IsShowLoading = false;
    }
    );
    }
    }

