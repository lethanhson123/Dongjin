import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { tspart_ecn } from 'src/app/shared/MES/tspart_ecn.model';
import { tspart_ecnService } from 'src/app/shared/MES/tspart_ecn.service';

@Component({
  selector: 'app-tspart_ecn-info',
  templateUrl: './tspart_ecn-info.component.html',
  styleUrls: ['./tspart_ecn-info.component.css']
})
export class tspart_ecnDetailComponent implements OnInit {

  constructor(
    public DialogRef: MatDialogRef<tspart_ecnDetailComponent>,    
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public tspart_ecnService: tspart_ecnService,
    ) {
    }

    ngOnInit(): void {

    }
    ngAfterViewInit() {
    //this.tspart_ecnSearch();
    }
    Close() {
    this.DialogRef.close();
    }
    tspart_ecnSearch() {
    this.tspart_ecnService.GetByIDAsync().subscribe(
    res => {
    this.tspart_ecnService.FormData = res as tspart_ecn;
    if (this.tspart_ecnService.FormData.PARTECN_IDX == environment.InitializationNumber) {
    }
    },
    err => {
    }
    );
    }
    tspart_ecnSave() {
    this.tspart_ecnService.IsShowLoading = true;
    this.tspart_ecnService.SaveAsync().subscribe(
    res => {
    this.tspart_ecnService.FormData = res as tspart_ecn;
    this.NotificationService.warn(environment.SaveSuccess);
    },
    err => {
    this.NotificationService.warn(environment.SaveNotSuccess);
    },
    () => {
    this.tspart_ecnService.IsShowLoading = false;
    }
    );
    }
    }

