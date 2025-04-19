import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { torderlist_sw } from 'src/app/shared/MES/torderlist_sw.model';
import { torderlist_swService } from 'src/app/shared/MES/torderlist_sw.service';

@Component({
  selector: 'app-torderlist_sw-info',
  templateUrl: './torderlist_sw-info.component.html',
  styleUrls: ['./torderlist_sw-info.component.css']
})
export class torderlist_swDetailComponent implements OnInit {

  constructor(
    public DialogRef: MatDialogRef<torderlist_swDetailComponent>,    
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public torderlist_swService: torderlist_swService,
    ) {
    }

    ngOnInit(): void {

    }
    ngAfterViewInit() {
    //this.torderlist_swSearch();
    }
    Close() {
    this.DialogRef.close();
    }
    torderlist_swSearch() {
    this.torderlist_swService.GetByIDAsync().subscribe(
    res => {
    this.torderlist_swService.FormData = res as torderlist_sw;
    if (this.torderlist_swService.FormData.ORDER_IDX == environment.InitializationNumber) {
    }
    },
    err => {
    }
    );
    }
    torderlist_swSave() {
    this.torderlist_swService.IsShowLoading = true;
    this.torderlist_swService.SaveAsync().subscribe(
    res => {
    this.torderlist_swService.FormData = res as torderlist_sw;
    this.NotificationService.warn(environment.SaveSuccess);
    },
    err => {
    this.NotificationService.warn(environment.SaveNotSuccess);
    },
    () => {
    this.torderlist_swService.IsShowLoading = false;
    }
    );
    }
    }

