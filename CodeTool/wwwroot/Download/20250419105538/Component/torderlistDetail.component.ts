import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { torderlist } from 'src/app/shared/MES/torderlist.model';
import { torderlistService } from 'src/app/shared/MES/torderlist.service';

@Component({
  selector: 'app-torderlist-info',
  templateUrl: './torderlist-info.component.html',
  styleUrls: ['./torderlist-info.component.css']
})
export class torderlistDetailComponent implements OnInit {

  constructor(
    public DialogRef: MatDialogRef<torderlistDetailComponent>,    
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public torderlistService: torderlistService,
    ) {
    }

    ngOnInit(): void {

    }
    ngAfterViewInit() {
    //this.torderlistSearch();
    }
    Close() {
    this.DialogRef.close();
    }
    torderlistSearch() {
    this.torderlistService.GetByIDAsync().subscribe(
    res => {
    this.torderlistService.FormData = res as torderlist;
    if (this.torderlistService.FormData.ORDER_IDX == environment.InitializationNumber) {
    }
    },
    err => {
    }
    );
    }
    torderlistSave() {
    this.torderlistService.IsShowLoading = true;
    this.torderlistService.SaveAsync().subscribe(
    res => {
    this.torderlistService.FormData = res as torderlist;
    this.NotificationService.warn(environment.SaveSuccess);
    },
    err => {
    this.NotificationService.warn(environment.SaveNotSuccess);
    },
    () => {
    this.torderlistService.IsShowLoading = false;
    }
    );
    }
    }

