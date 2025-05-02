import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { torderinspection } from 'src/app/shared/MES/torderinspection.model';
import { torderinspectionService } from 'src/app/shared/MES/torderinspection.service';

@Component({
  selector: 'app-torderinspection-info',
  templateUrl: './torderinspection-info.component.html',
  styleUrls: ['./torderinspection-info.component.css']
})
export class torderinspectionDetailComponent implements OnInit {

  constructor(
    public DialogRef: MatDialogRef<torderinspectionDetailComponent>,    
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public torderinspectionService: torderinspectionService,
    ) {
    }

    ngOnInit(): void {

    }
    ngAfterViewInit() {
    //this.torderinspectionSearch();
    }
    Close() {
    this.DialogRef.close();
    }
    torderinspectionSearch() {
    this.torderinspectionService.GetByIDAsync().subscribe(
    res => {
    this.torderinspectionService.FormData = res as torderinspection;
    if (this.torderinspectionService.FormData.INSPECTION_IDX == environment.InitializationNumber) {
    }
    },
    err => {
    }
    );
    }
    torderinspectionSave() {
    this.torderinspectionService.IsShowLoading = true;
    this.torderinspectionService.SaveAsync().subscribe(
    res => {
    this.torderinspectionService.FormData = res as torderinspection;
    this.NotificationService.warn(environment.SaveSuccess);
    },
    err => {
    this.NotificationService.warn(environment.SaveNotSuccess);
    },
    () => {
    this.torderinspectionService.IsShowLoading = false;
    }
    );
    }
    }

