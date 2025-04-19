import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { tdpdmtim_hist } from 'src/app/shared/MES/tdpdmtim_hist.model';
import { tdpdmtim_histService } from 'src/app/shared/MES/tdpdmtim_hist.service';

@Component({
  selector: 'app-tdpdmtim_hist-info',
  templateUrl: './tdpdmtim_hist-info.component.html',
  styleUrls: ['./tdpdmtim_hist-info.component.css']
})
export class tdpdmtim_histDetailComponent implements OnInit {

  constructor(
    public DialogRef: MatDialogRef<tdpdmtim_histDetailComponent>,    
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public tdpdmtim_histService: tdpdmtim_histService,
    ) {
    }

    ngOnInit(): void {

    }
    ngAfterViewInit() {
    //this.tdpdmtim_histSearch();
    }
    Close() {
    this.DialogRef.close();
    }
    tdpdmtim_histSearch() {
    this.tdpdmtim_histService.GetByIDAsync().subscribe(
    res => {
    this.tdpdmtim_histService.FormData = res as tdpdmtim_hist;
    if (this.tdpdmtim_histService.FormData.PDMTIN_IDX == environment.InitializationNumber) {
    }
    },
    err => {
    }
    );
    }
    tdpdmtim_histSave() {
    this.tdpdmtim_histService.IsShowLoading = true;
    this.tdpdmtim_histService.SaveAsync().subscribe(
    res => {
    this.tdpdmtim_histService.FormData = res as tdpdmtim_hist;
    this.NotificationService.warn(environment.SaveSuccess);
    },
    err => {
    this.NotificationService.warn(environment.SaveNotSuccess);
    },
    () => {
    this.tdpdmtim_histService.IsShowLoading = false;
    }
    );
    }
    }

