import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { ttc_rackmtin } from 'src/app/shared/MES/ttc_rackmtin.model';
import { ttc_rackmtinService } from 'src/app/shared/MES/ttc_rackmtin.service';

@Component({
  selector: 'app-ttc_rackmtin-info',
  templateUrl: './ttc_rackmtin-info.component.html',
  styleUrls: ['./ttc_rackmtin-info.component.css']
})
export class ttc_rackmtinDetailComponent implements OnInit {

  constructor(
    public DialogRef: MatDialogRef<ttc_rackmtinDetailComponent>,    
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public ttc_rackmtinService: ttc_rackmtinService,
    ) {
    }

    ngOnInit(): void {

    }
    ngAfterViewInit() {
    //this.ttc_rackmtinSearch();
    }
    Close() {
    this.DialogRef.close();
    }
    ttc_rackmtinSearch() {
    this.ttc_rackmtinService.GetByIDAsync().subscribe(
    res => {
    this.ttc_rackmtinService.FormData = res as ttc_rackmtin;
    if (this.ttc_rackmtinService.FormData.TRACK_IDX == environment.InitializationNumber) {
    }
    },
    err => {
    }
    );
    }
    ttc_rackmtinSave() {
    this.ttc_rackmtinService.IsShowLoading = true;
    this.ttc_rackmtinService.SaveAsync().subscribe(
    res => {
    this.ttc_rackmtinService.FormData = res as ttc_rackmtin;
    this.NotificationService.warn(environment.SaveSuccess);
    },
    err => {
    this.NotificationService.warn(environment.SaveNotSuccess);
    },
    () => {
    this.ttc_rackmtinService.IsShowLoading = false;
    }
    );
    }
    }

