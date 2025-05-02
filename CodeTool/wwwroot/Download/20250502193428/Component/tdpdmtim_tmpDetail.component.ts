import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { tdpdmtim_tmp } from 'src/app/shared/MES/tdpdmtim_tmp.model';
import { tdpdmtim_tmpService } from 'src/app/shared/MES/tdpdmtim_tmp.service';

@Component({
  selector: 'app-tdpdmtim_tmp-info',
  templateUrl: './tdpdmtim_tmp-info.component.html',
  styleUrls: ['./tdpdmtim_tmp-info.component.css']
})
export class tdpdmtim_tmpDetailComponent implements OnInit {

  constructor(
    public DialogRef: MatDialogRef<tdpdmtim_tmpDetailComponent>,    
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public tdpdmtim_tmpService: tdpdmtim_tmpService,
    ) {
    }

    ngOnInit(): void {

    }
    ngAfterViewInit() {
    //this.tdpdmtim_tmpSearch();
    }
    Close() {
    this.DialogRef.close();
    }
    tdpdmtim_tmpSearch() {
    this.tdpdmtim_tmpService.GetByIDAsync().subscribe(
    res => {
    this.tdpdmtim_tmpService.FormData = res as tdpdmtim_tmp;
    if (this.tdpdmtim_tmpService.FormData.PDTMP_IDX == environment.InitializationNumber) {
    }
    },
    err => {
    }
    );
    }
    tdpdmtim_tmpSave() {
    this.tdpdmtim_tmpService.IsShowLoading = true;
    this.tdpdmtim_tmpService.SaveAsync().subscribe(
    res => {
    this.tdpdmtim_tmpService.FormData = res as tdpdmtim_tmp;
    this.NotificationService.warn(environment.SaveSuccess);
    },
    err => {
    this.NotificationService.warn(environment.SaveNotSuccess);
    },
    () => {
    this.tdpdmtim_tmpService.IsShowLoading = false;
    }
    );
    }
    }

