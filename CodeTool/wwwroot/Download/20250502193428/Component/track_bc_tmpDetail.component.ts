import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { track_bc_tmp } from 'src/app/shared/MES/track_bc_tmp.model';
import { track_bc_tmpService } from 'src/app/shared/MES/track_bc_tmp.service';

@Component({
  selector: 'app-track_bc_tmp-info',
  templateUrl: './track_bc_tmp-info.component.html',
  styleUrls: ['./track_bc_tmp-info.component.css']
})
export class track_bc_tmpDetailComponent implements OnInit {

  constructor(
    public DialogRef: MatDialogRef<track_bc_tmpDetailComponent>,    
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public track_bc_tmpService: track_bc_tmpService,
    ) {
    }

    ngOnInit(): void {

    }
    ngAfterViewInit() {
    //this.track_bc_tmpSearch();
    }
    Close() {
    this.DialogRef.close();
    }
    track_bc_tmpSearch() {
    this.track_bc_tmpService.GetByIDAsync().subscribe(
    res => {
    this.track_bc_tmpService.FormData = res as track_bc_tmp;
    if (this.track_bc_tmpService.FormData.TRACK_BC_IDX == environment.InitializationNumber) {
    }
    },
    err => {
    }
    );
    }
    track_bc_tmpSave() {
    this.track_bc_tmpService.IsShowLoading = true;
    this.track_bc_tmpService.SaveAsync().subscribe(
    res => {
    this.track_bc_tmpService.FormData = res as track_bc_tmp;
    this.NotificationService.warn(environment.SaveSuccess);
    },
    err => {
    this.NotificationService.warn(environment.SaveNotSuccess);
    },
    () => {
    this.track_bc_tmpService.IsShowLoading = false;
    }
    );
    }
    }

