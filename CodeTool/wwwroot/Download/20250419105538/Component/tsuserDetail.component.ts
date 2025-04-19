import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { tsuser } from 'src/app/shared/MES/tsuser.model';
import { tsuserService } from 'src/app/shared/MES/tsuser.service';

@Component({
  selector: 'app-tsuser-info',
  templateUrl: './tsuser-info.component.html',
  styleUrls: ['./tsuser-info.component.css']
})
export class tsuserDetailComponent implements OnInit {

  constructor(
    public DialogRef: MatDialogRef<tsuserDetailComponent>,    
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public tsuserService: tsuserService,
    ) {
    }

    ngOnInit(): void {

    }
    ngAfterViewInit() {
    //this.tsuserSearch();
    }
    Close() {
    this.DialogRef.close();
    }
    tsuserSearch() {
    this.tsuserService.GetByIDAsync().subscribe(
    res => {
    this.tsuserService.FormData = res as tsuser;
    if (this.tsuserService.FormData.USER_IDX == environment.InitializationNumber) {
    }
    },
    err => {
    }
    );
    }
    tsuserSave() {
    this.tsuserService.IsShowLoading = true;
    this.tsuserService.SaveAsync().subscribe(
    res => {
    this.tsuserService.FormData = res as tsuser;
    this.NotificationService.warn(environment.SaveSuccess);
    },
    err => {
    this.NotificationService.warn(environment.SaveNotSuccess);
    },
    () => {
    this.tsuserService.IsShowLoading = false;
    }
    );
    }
    }

