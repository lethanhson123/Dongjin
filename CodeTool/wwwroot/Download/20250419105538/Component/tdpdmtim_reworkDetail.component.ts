import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { tdpdmtim_rework } from 'src/app/shared/MES/tdpdmtim_rework.model';
import { tdpdmtim_reworkService } from 'src/app/shared/MES/tdpdmtim_rework.service';

@Component({
  selector: 'app-tdpdmtim_rework-info',
  templateUrl: './tdpdmtim_rework-info.component.html',
  styleUrls: ['./tdpdmtim_rework-info.component.css']
})
export class tdpdmtim_reworkDetailComponent implements OnInit {

  constructor(
    public DialogRef: MatDialogRef<tdpdmtim_reworkDetailComponent>,    
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public tdpdmtim_reworkService: tdpdmtim_reworkService,
    ) {
    }

    ngOnInit(): void {

    }
    ngAfterViewInit() {
    //this.tdpdmtim_reworkSearch();
    }
    Close() {
    this.DialogRef.close();
    }
    tdpdmtim_reworkSearch() {
    this.tdpdmtim_reworkService.GetByIDAsync().subscribe(
    res => {
    this.tdpdmtim_reworkService.FormData = res as tdpdmtim_rework;
    if (this.tdpdmtim_reworkService.FormData.PDMTIN_IDX == environment.InitializationNumber) {
    }
    },
    err => {
    }
    );
    }
    tdpdmtim_reworkSave() {
    this.tdpdmtim_reworkService.IsShowLoading = true;
    this.tdpdmtim_reworkService.SaveAsync().subscribe(
    res => {
    this.tdpdmtim_reworkService.FormData = res as tdpdmtim_rework;
    this.NotificationService.warn(environment.SaveSuccess);
    },
    err => {
    this.NotificationService.warn(environment.SaveNotSuccess);
    },
    () => {
    this.tdpdmtim_reworkService.IsShowLoading = false;
    }
    );
    }
    }

