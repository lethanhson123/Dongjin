import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { tdpdotplmu } from 'src/app/shared/MES/tdpdotplmu.model';
import { tdpdotplmuService } from 'src/app/shared/MES/tdpdotplmu.service';

@Component({
  selector: 'app-tdpdotplmu-info',
  templateUrl: './tdpdotplmu-info.component.html',
  styleUrls: ['./tdpdotplmu-info.component.css']
})
export class tdpdotplmuDetailComponent implements OnInit {

  constructor(
    public DialogRef: MatDialogRef<tdpdotplmuDetailComponent>,    
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public tdpdotplmuService: tdpdotplmuService,
    ) {
    }

    ngOnInit(): void {

    }
    ngAfterViewInit() {
    //this.tdpdotplmuSearch();
    }
    Close() {
    this.DialogRef.close();
    }
    tdpdotplmuSearch() {
    this.tdpdotplmuService.GetByIDAsync().subscribe(
    res => {
    this.tdpdotplmuService.FormData = res as tdpdotplmu;
    if (this.tdpdotplmuService.FormData.TDPDOTPLMU_IDX == environment.InitializationNumber) {
    }
    },
    err => {
    }
    );
    }
    tdpdotplmuSave() {
    this.tdpdotplmuService.IsShowLoading = true;
    this.tdpdotplmuService.SaveAsync().subscribe(
    res => {
    this.tdpdotplmuService.FormData = res as tdpdotplmu;
    this.NotificationService.warn(environment.SaveSuccess);
    },
    err => {
    this.NotificationService.warn(environment.SaveNotSuccess);
    },
    () => {
    this.tdpdotplmuService.IsShowLoading = false;
    }
    );
    }
    }

