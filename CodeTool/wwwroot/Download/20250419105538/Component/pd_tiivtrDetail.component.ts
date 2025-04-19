import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { pd_tiivtr } from 'src/app/shared/MES/pd_tiivtr.model';
import { pd_tiivtrService } from 'src/app/shared/MES/pd_tiivtr.service';

@Component({
  selector: 'app-pd_tiivtr-info',
  templateUrl: './pd_tiivtr-info.component.html',
  styleUrls: ['./pd_tiivtr-info.component.css']
})
export class pd_tiivtrDetailComponent implements OnInit {

  constructor(
    public DialogRef: MatDialogRef<pd_tiivtrDetailComponent>,    
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public pd_tiivtrService: pd_tiivtrService,
    ) {
    }

    ngOnInit(): void {

    }
    ngAfterViewInit() {
    //this.pd_tiivtrSearch();
    }
    Close() {
    this.DialogRef.close();
    }
    pd_tiivtrSearch() {
    this.pd_tiivtrService.GetByIDAsync().subscribe(
    res => {
    this.pd_tiivtrService.FormData = res as pd_tiivtr;
    if (this.pd_tiivtrService.FormData.IV_IDX == environment.InitializationNumber) {
    }
    },
    err => {
    }
    );
    }
    pd_tiivtrSave() {
    this.pd_tiivtrService.IsShowLoading = true;
    this.pd_tiivtrService.SaveAsync().subscribe(
    res => {
    this.pd_tiivtrService.FormData = res as pd_tiivtr;
    this.NotificationService.warn(environment.SaveSuccess);
    },
    err => {
    this.NotificationService.warn(environment.SaveNotSuccess);
    },
    () => {
    this.pd_tiivtrService.IsShowLoading = false;
    }
    );
    }
    }

