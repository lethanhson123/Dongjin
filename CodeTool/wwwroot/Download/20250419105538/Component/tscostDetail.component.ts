import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { tscost } from 'src/app/shared/MES/tscost.model';
import { tscostService } from 'src/app/shared/MES/tscost.service';

@Component({
  selector: 'app-tscost-info',
  templateUrl: './tscost-info.component.html',
  styleUrls: ['./tscost-info.component.css']
})
export class tscostDetailComponent implements OnInit {

  constructor(
    public DialogRef: MatDialogRef<tscostDetailComponent>,    
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public tscostService: tscostService,
    ) {
    }

    ngOnInit(): void {

    }
    ngAfterViewInit() {
    //this.tscostSearch();
    }
    Close() {
    this.DialogRef.close();
    }
    tscostSearch() {
    this.tscostService.GetByIDAsync().subscribe(
    res => {
    this.tscostService.FormData = res as tscost;
    if (this.tscostService.FormData.TSCOST_IDX == environment.InitializationNumber) {
    }
    },
    err => {
    }
    );
    }
    tscostSave() {
    this.tscostService.IsShowLoading = true;
    this.tscostService.SaveAsync().subscribe(
    res => {
    this.tscostService.FormData = res as tscost;
    this.NotificationService.warn(environment.SaveSuccess);
    },
    err => {
    this.NotificationService.warn(environment.SaveNotSuccess);
    },
    () => {
    this.tscostService.IsShowLoading = false;
    }
    );
    }
    }

