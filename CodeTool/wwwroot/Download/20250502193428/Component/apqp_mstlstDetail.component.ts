import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { apqp_mstlst } from 'src/app/shared/MES/apqp_mstlst.model';
import { apqp_mstlstService } from 'src/app/shared/MES/apqp_mstlst.service';

@Component({
  selector: 'app-apqp_mstlst-info',
  templateUrl: './apqp_mstlst-info.component.html',
  styleUrls: ['./apqp_mstlst-info.component.css']
})
export class apqp_mstlstDetailComponent implements OnInit {

  constructor(
    public DialogRef: MatDialogRef<apqp_mstlstDetailComponent>,    
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public apqp_mstlstService: apqp_mstlstService,
    ) {
    }

    ngOnInit(): void {

    }
    ngAfterViewInit() {
    //this.apqp_mstlstSearch();
    }
    Close() {
    this.DialogRef.close();
    }
    apqp_mstlstSearch() {
    this.apqp_mstlstService.GetByIDAsync().subscribe(
    res => {
    this.apqp_mstlstService.FormData = res as apqp_mstlst;
    if (this.apqp_mstlstService.FormData.APQP_MS_IDX == environment.InitializationNumber) {
    }
    },
    err => {
    }
    );
    }
    apqp_mstlstSave() {
    this.apqp_mstlstService.IsShowLoading = true;
    this.apqp_mstlstService.SaveAsync().subscribe(
    res => {
    this.apqp_mstlstService.FormData = res as apqp_mstlst;
    this.NotificationService.warn(environment.SaveSuccess);
    },
    err => {
    this.NotificationService.warn(environment.SaveNotSuccess);
    },
    () => {
    this.apqp_mstlstService.IsShowLoading = false;
    }
    );
    }
    }

