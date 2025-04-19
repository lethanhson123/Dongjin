import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { tdpdmtim } from 'src/app/shared/MES/tdpdmtim.model';
import { tdpdmtimService } from 'src/app/shared/MES/tdpdmtim.service';

@Component({
  selector: 'app-tdpdmtim-info',
  templateUrl: './tdpdmtim-info.component.html',
  styleUrls: ['./tdpdmtim-info.component.css']
})
export class tdpdmtimDetailComponent implements OnInit {

  constructor(
    public DialogRef: MatDialogRef<tdpdmtimDetailComponent>,    
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public tdpdmtimService: tdpdmtimService,
    ) {
    }

    ngOnInit(): void {

    }
    ngAfterViewInit() {
    //this.tdpdmtimSearch();
    }
    Close() {
    this.DialogRef.close();
    }
    tdpdmtimSearch() {
    this.tdpdmtimService.GetByIDAsync().subscribe(
    res => {
    this.tdpdmtimService.FormData = res as tdpdmtim;
    if (this.tdpdmtimService.FormData.PDMTIN_IDX == environment.InitializationNumber) {
    }
    },
    err => {
    }
    );
    }
    tdpdmtimSave() {
    this.tdpdmtimService.IsShowLoading = true;
    this.tdpdmtimService.SaveAsync().subscribe(
    res => {
    this.tdpdmtimService.FormData = res as tdpdmtim;
    this.NotificationService.warn(environment.SaveSuccess);
    },
    err => {
    this.NotificationService.warn(environment.SaveNotSuccess);
    },
    () => {
    this.tdpdmtimService.IsShowLoading = false;
    }
    );
    }
    }

