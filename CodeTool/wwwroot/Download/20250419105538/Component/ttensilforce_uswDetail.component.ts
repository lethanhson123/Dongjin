import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { ttensilforce_usw } from 'src/app/shared/MES/ttensilforce_usw.model';
import { ttensilforce_uswService } from 'src/app/shared/MES/ttensilforce_usw.service';

@Component({
  selector: 'app-ttensilforce_usw-info',
  templateUrl: './ttensilforce_usw-info.component.html',
  styleUrls: ['./ttensilforce_usw-info.component.css']
})
export class ttensilforce_uswDetailComponent implements OnInit {

  constructor(
    public DialogRef: MatDialogRef<ttensilforce_uswDetailComponent>,    
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public ttensilforce_uswService: ttensilforce_uswService,
    ) {
    }

    ngOnInit(): void {

    }
    ngAfterViewInit() {
    //this.ttensilforce_uswSearch();
    }
    Close() {
    this.DialogRef.close();
    }
    ttensilforce_uswSearch() {
    this.ttensilforce_uswService.GetByIDAsync().subscribe(
    res => {
    this.ttensilforce_uswService.FormData = res as ttensilforce_usw;
    if (this.ttensilforce_uswService.FormData.FORCE_USW_IDX == environment.InitializationNumber) {
    }
    },
    err => {
    }
    );
    }
    ttensilforce_uswSave() {
    this.ttensilforce_uswService.IsShowLoading = true;
    this.ttensilforce_uswService.SaveAsync().subscribe(
    res => {
    this.ttensilforce_uswService.FormData = res as ttensilforce_usw;
    this.NotificationService.warn(environment.SaveSuccess);
    },
    err => {
    this.NotificationService.warn(environment.SaveNotSuccess);
    },
    () => {
    this.ttensilforce_uswService.IsShowLoading = false;
    }
    );
    }
    }

