import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { torderinspection_spst } from 'src/app/shared/MES/torderinspection_spst.model';
import { torderinspection_spstService } from 'src/app/shared/MES/torderinspection_spst.service';

@Component({
  selector: 'app-torderinspection_spst-info',
  templateUrl: './torderinspection_spst-info.component.html',
  styleUrls: ['./torderinspection_spst-info.component.css']
})
export class torderinspection_spstDetailComponent implements OnInit {

  constructor(
    public DialogRef: MatDialogRef<torderinspection_spstDetailComponent>,    
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public torderinspection_spstService: torderinspection_spstService,
    ) {
    }

    ngOnInit(): void {

    }
    ngAfterViewInit() {
    //this.torderinspection_spstSearch();
    }
    Close() {
    this.DialogRef.close();
    }
    torderinspection_spstSearch() {
    this.torderinspection_spstService.GetByIDAsync().subscribe(
    res => {
    this.torderinspection_spstService.FormData = res as torderinspection_spst;
    if (this.torderinspection_spstService.FormData.INSPECTION_IDX == environment.InitializationNumber) {
    }
    },
    err => {
    }
    );
    }
    torderinspection_spstSave() {
    this.torderinspection_spstService.IsShowLoading = true;
    this.torderinspection_spstService.SaveAsync().subscribe(
    res => {
    this.torderinspection_spstService.FormData = res as torderinspection_spst;
    this.NotificationService.warn(environment.SaveSuccess);
    },
    err => {
    this.NotificationService.warn(environment.SaveNotSuccess);
    },
    () => {
    this.torderinspection_spstService.IsShowLoading = false;
    }
    );
    }
    }

