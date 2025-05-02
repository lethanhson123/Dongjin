import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { torderlist_wtime } from 'src/app/shared/MES/torderlist_wtime.model';
import { torderlist_wtimeService } from 'src/app/shared/MES/torderlist_wtime.service';

@Component({
  selector: 'app-torderlist_wtime-info',
  templateUrl: './torderlist_wtime-info.component.html',
  styleUrls: ['./torderlist_wtime-info.component.css']
})
export class torderlist_wtimeDetailComponent implements OnInit {

  constructor(
    public DialogRef: MatDialogRef<torderlist_wtimeDetailComponent>,    
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public torderlist_wtimeService: torderlist_wtimeService,
    ) {
    }

    ngOnInit(): void {

    }
    ngAfterViewInit() {
    //this.torderlist_wtimeSearch();
    }
    Close() {
    this.DialogRef.close();
    }
    torderlist_wtimeSearch() {
    this.torderlist_wtimeService.GetByIDAsync().subscribe(
    res => {
    this.torderlist_wtimeService.FormData = res as torderlist_wtime;
    if (this.torderlist_wtimeService.FormData.TOWT_INDX == environment.InitializationNumber) {
    }
    },
    err => {
    }
    );
    }
    torderlist_wtimeSave() {
    this.torderlist_wtimeService.IsShowLoading = true;
    this.torderlist_wtimeService.SaveAsync().subscribe(
    res => {
    this.torderlist_wtimeService.FormData = res as torderlist_wtime;
    this.NotificationService.warn(environment.SaveSuccess);
    },
    err => {
    this.NotificationService.warn(environment.SaveNotSuccess);
    },
    () => {
    this.torderlist_wtimeService.IsShowLoading = false;
    }
    );
    }
    }

