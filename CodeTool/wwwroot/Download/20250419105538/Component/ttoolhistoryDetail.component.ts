import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { ttoolhistory } from 'src/app/shared/MES/ttoolhistory.model';
import { ttoolhistoryService } from 'src/app/shared/MES/ttoolhistory.service';

@Component({
  selector: 'app-ttoolhistory-info',
  templateUrl: './ttoolhistory-info.component.html',
  styleUrls: ['./ttoolhistory-info.component.css']
})
export class ttoolhistoryDetailComponent implements OnInit {

  constructor(
    public DialogRef: MatDialogRef<ttoolhistoryDetailComponent>,    
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public ttoolhistoryService: ttoolhistoryService,
    ) {
    }

    ngOnInit(): void {

    }
    ngAfterViewInit() {
    //this.ttoolhistorySearch();
    }
    Close() {
    this.DialogRef.close();
    }
    ttoolhistorySearch() {
    this.ttoolhistoryService.GetByIDAsync().subscribe(
    res => {
    this.ttoolhistoryService.FormData = res as ttoolhistory;
    if (this.ttoolhistoryService.FormData.TOOL_HIS_IDX == environment.InitializationNumber) {
    }
    },
    err => {
    }
    );
    }
    ttoolhistorySave() {
    this.ttoolhistoryService.IsShowLoading = true;
    this.ttoolhistoryService.SaveAsync().subscribe(
    res => {
    this.ttoolhistoryService.FormData = res as ttoolhistory;
    this.NotificationService.warn(environment.SaveSuccess);
    },
    err => {
    this.NotificationService.warn(environment.SaveNotSuccess);
    },
    () => {
    this.ttoolhistoryService.IsShowLoading = false;
    }
    );
    }
    }

