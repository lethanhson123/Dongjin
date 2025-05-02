import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { torderlist_lplist } from 'src/app/shared/MES/torderlist_lplist.model';
import { torderlist_lplistService } from 'src/app/shared/MES/torderlist_lplist.service';

@Component({
  selector: 'app-torderlist_lplist-info',
  templateUrl: './torderlist_lplist-info.component.html',
  styleUrls: ['./torderlist_lplist-info.component.css']
})
export class torderlist_lplistDetailComponent implements OnInit {

  constructor(
    public DialogRef: MatDialogRef<torderlist_lplistDetailComponent>,    
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public torderlist_lplistService: torderlist_lplistService,
    ) {
    }

    ngOnInit(): void {

    }
    ngAfterViewInit() {
    //this.torderlist_lplistSearch();
    }
    Close() {
    this.DialogRef.close();
    }
    torderlist_lplistSearch() {
    this.torderlist_lplistService.GetByIDAsync().subscribe(
    res => {
    this.torderlist_lplistService.FormData = res as torderlist_lplist;
    if (this.torderlist_lplistService.FormData.TORDERLIST_LPLIST_IDX == environment.InitializationNumber) {
    }
    },
    err => {
    }
    );
    }
    torderlist_lplistSave() {
    this.torderlist_lplistService.IsShowLoading = true;
    this.torderlist_lplistService.SaveAsync().subscribe(
    res => {
    this.torderlist_lplistService.FormData = res as torderlist_lplist;
    this.NotificationService.warn(environment.SaveSuccess);
    },
    err => {
    this.NotificationService.warn(environment.SaveNotSuccess);
    },
    () => {
    this.torderlist_lplistService.IsShowLoading = false;
    }
    );
    }
    }

