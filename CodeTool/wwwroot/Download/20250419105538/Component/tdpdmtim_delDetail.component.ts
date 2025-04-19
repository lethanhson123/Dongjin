import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { tdpdmtim_del } from 'src/app/shared/MES/tdpdmtim_del.model';
import { tdpdmtim_delService } from 'src/app/shared/MES/tdpdmtim_del.service';

@Component({
  selector: 'app-tdpdmtim_del-info',
  templateUrl: './tdpdmtim_del-info.component.html',
  styleUrls: ['./tdpdmtim_del-info.component.css']
})
export class tdpdmtim_delDetailComponent implements OnInit {

  constructor(
    public DialogRef: MatDialogRef<tdpdmtim_delDetailComponent>,    
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public tdpdmtim_delService: tdpdmtim_delService,
    ) {
    }

    ngOnInit(): void {

    }
    ngAfterViewInit() {
    //this.tdpdmtim_delSearch();
    }
    Close() {
    this.DialogRef.close();
    }
    tdpdmtim_delSearch() {
    this.tdpdmtim_delService.GetByIDAsync().subscribe(
    res => {
    this.tdpdmtim_delService.FormData = res as tdpdmtim_del;
    if (this.tdpdmtim_delService.FormData.PDMTIN_IDX == environment.InitializationNumber) {
    }
    },
    err => {
    }
    );
    }
    tdpdmtim_delSave() {
    this.tdpdmtim_delService.IsShowLoading = true;
    this.tdpdmtim_delService.SaveAsync().subscribe(
    res => {
    this.tdpdmtim_delService.FormData = res as tdpdmtim_del;
    this.NotificationService.warn(environment.SaveSuccess);
    },
    err => {
    this.NotificationService.warn(environment.SaveNotSuccess);
    },
    () => {
    this.tdpdmtim_delService.IsShowLoading = false;
    }
    );
    }
    }

