import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { ttensilforce } from 'src/app/shared/MES/ttensilforce.model';
import { ttensilforceService } from 'src/app/shared/MES/ttensilforce.service';

@Component({
  selector: 'app-ttensilforce-info',
  templateUrl: './ttensilforce-info.component.html',
  styleUrls: ['./ttensilforce-info.component.css']
})
export class ttensilforceDetailComponent implements OnInit {

  constructor(
    public DialogRef: MatDialogRef<ttensilforceDetailComponent>,    
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public ttensilforceService: ttensilforceService,
    ) {
    }

    ngOnInit(): void {

    }
    ngAfterViewInit() {
    //this.ttensilforceSearch();
    }
    Close() {
    this.DialogRef.close();
    }
    ttensilforceSearch() {
    this.ttensilforceService.GetByIDAsync().subscribe(
    res => {
    this.ttensilforceService.FormData = res as ttensilforce;
    if (this.ttensilforceService.FormData.FORCE_IDX == environment.InitializationNumber) {
    }
    },
    err => {
    }
    );
    }
    ttensilforceSave() {
    this.ttensilforceService.IsShowLoading = true;
    this.ttensilforceService.SaveAsync().subscribe(
    res => {
    this.ttensilforceService.FormData = res as ttensilforce;
    this.NotificationService.warn(environment.SaveSuccess);
    },
    err => {
    this.NotificationService.warn(environment.SaveNotSuccess);
    },
    () => {
    this.ttensilforceService.IsShowLoading = false;
    }
    );
    }
    }

