import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { tmmtin_dmm_app } from 'src/app/shared/MES/tmmtin_dmm_app.model';
import { tmmtin_dmm_appService } from 'src/app/shared/MES/tmmtin_dmm_app.service';

@Component({
  selector: 'app-tmmtin_dmm_app-info',
  templateUrl: './tmmtin_dmm_app-info.component.html',
  styleUrls: ['./tmmtin_dmm_app-info.component.css']
})
export class tmmtin_dmm_appDetailComponent implements OnInit {

  constructor(
    public DialogRef: MatDialogRef<tmmtin_dmm_appDetailComponent>,    
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public tmmtin_dmm_appService: tmmtin_dmm_appService,
    ) {
    }

    ngOnInit(): void {

    }
    ngAfterViewInit() {
    //this.tmmtin_dmm_appSearch();
    }
    Close() {
    this.DialogRef.close();
    }
    tmmtin_dmm_appSearch() {
    this.tmmtin_dmm_appService.GetByIDAsync().subscribe(
    res => {
    this.tmmtin_dmm_appService.FormData = res as tmmtin_dmm_app;
    if (this.tmmtin_dmm_appService.FormData.TMMTIN_DMM_IDX == environment.InitializationNumber) {
    }
    },
    err => {
    }
    );
    }
    tmmtin_dmm_appSave() {
    this.tmmtin_dmm_appService.IsShowLoading = true;
    this.tmmtin_dmm_appService.SaveAsync().subscribe(
    res => {
    this.tmmtin_dmm_appService.FormData = res as tmmtin_dmm_app;
    this.NotificationService.warn(environment.SaveSuccess);
    },
    err => {
    this.NotificationService.warn(environment.SaveNotSuccess);
    },
    () => {
    this.tmmtin_dmm_appService.IsShowLoading = false;
    }
    );
    }
    }

