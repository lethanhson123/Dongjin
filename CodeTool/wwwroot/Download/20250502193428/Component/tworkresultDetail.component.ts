import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { tworkresult } from 'src/app/shared/MES/tworkresult.model';
import { tworkresultService } from 'src/app/shared/MES/tworkresult.service';

@Component({
  selector: 'app-tworkresult-info',
  templateUrl: './tworkresult-info.component.html',
  styleUrls: ['./tworkresult-info.component.css']
})
export class tworkresultDetailComponent implements OnInit {

  constructor(
    public DialogRef: MatDialogRef<tworkresultDetailComponent>,    
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public tworkresultService: tworkresultService,
    ) {
    }

    ngOnInit(): void {

    }
    ngAfterViewInit() {
    //this.tworkresultSearch();
    }
    Close() {
    this.DialogRef.close();
    }
    tworkresultSearch() {
    this.tworkresultService.GetByIDAsync().subscribe(
    res => {
    this.tworkresultService.FormData = res as tworkresult;
    if (this.tworkresultService.FormData.WORK_IDX == environment.InitializationNumber) {
    }
    },
    err => {
    }
    );
    }
    tworkresultSave() {
    this.tworkresultService.IsShowLoading = true;
    this.tworkresultService.SaveAsync().subscribe(
    res => {
    this.tworkresultService.FormData = res as tworkresult;
    this.NotificationService.warn(environment.SaveSuccess);
    },
    err => {
    this.NotificationService.warn(environment.SaveNotSuccess);
    },
    () => {
    this.tworkresultService.IsShowLoading = false;
    }
    );
    }
    }

