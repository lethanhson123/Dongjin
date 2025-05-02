import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { trackmtim } from 'src/app/shared/MES/trackmtim.model';
import { trackmtimService } from 'src/app/shared/MES/trackmtim.service';

@Component({
  selector: 'app-trackmtim-info',
  templateUrl: './trackmtim-info.component.html',
  styleUrls: ['./trackmtim-info.component.css']
})
export class trackmtimDetailComponent implements OnInit {

  constructor(
    public DialogRef: MatDialogRef<trackmtimDetailComponent>,    
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public trackmtimService: trackmtimService,
    ) {
    }

    ngOnInit(): void {

    }
    ngAfterViewInit() {
    //this.trackmtimSearch();
    }
    Close() {
    this.DialogRef.close();
    }
    trackmtimSearch() {
    this.trackmtimService.GetByIDAsync().subscribe(
    res => {
    this.trackmtimService.FormData = res as trackmtim;
    if (this.trackmtimService.FormData.TRACK_IDX == environment.InitializationNumber) {
    }
    },
    err => {
    }
    );
    }
    trackmtimSave() {
    this.trackmtimService.IsShowLoading = true;
    this.trackmtimService.SaveAsync().subscribe(
    res => {
    this.trackmtimService.FormData = res as trackmtim;
    this.NotificationService.warn(environment.SaveSuccess);
    },
    err => {
    this.NotificationService.warn(environment.SaveNotSuccess);
    },
    () => {
    this.trackmtimService.IsShowLoading = false;
    }
    );
    }
    }

