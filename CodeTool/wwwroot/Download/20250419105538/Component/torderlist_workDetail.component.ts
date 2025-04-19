import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { torderlist_work } from 'src/app/shared/MES/torderlist_work.model';
import { torderlist_workService } from 'src/app/shared/MES/torderlist_work.service';

@Component({
  selector: 'app-torderlist_work-info',
  templateUrl: './torderlist_work-info.component.html',
  styleUrls: ['./torderlist_work-info.component.css']
})
export class torderlist_workDetailComponent implements OnInit {

  constructor(
    public DialogRef: MatDialogRef<torderlist_workDetailComponent>,    
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public torderlist_workService: torderlist_workService,
    ) {
    }

    ngOnInit(): void {

    }
    ngAfterViewInit() {
    //this.torderlist_workSearch();
    }
    Close() {
    this.DialogRef.close();
    }
    torderlist_workSearch() {
    this.torderlist_workService.GetByIDAsync().subscribe(
    res => {
    this.torderlist_workService.FormData = res as torderlist_work;
    if (this.torderlist_workService.FormData.TORDERLIST_WORK_IDX == environment.InitializationNumber) {
    }
    },
    err => {
    }
    );
    }
    torderlist_workSave() {
    this.torderlist_workService.IsShowLoading = true;
    this.torderlist_workService.SaveAsync().subscribe(
    res => {
    this.torderlist_workService.FormData = res as torderlist_work;
    this.NotificationService.warn(environment.SaveSuccess);
    },
    err => {
    this.NotificationService.warn(environment.SaveNotSuccess);
    },
    () => {
    this.torderlist_workService.IsShowLoading = false;
    }
    );
    }
    }

