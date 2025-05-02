import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { tsauth } from 'src/app/shared/MES/tsauth.model';
import { tsauthService } from 'src/app/shared/MES/tsauth.service';

@Component({
  selector: 'app-tsauth-info',
  templateUrl: './tsauth-info.component.html',
  styleUrls: ['./tsauth-info.component.css']
})
export class tsauthDetailComponent implements OnInit {

  constructor(
    public DialogRef: MatDialogRef<tsauthDetailComponent>,    
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public tsauthService: tsauthService,
    ) {
    }

    ngOnInit(): void {

    }
    ngAfterViewInit() {
    //this.tsauthSearch();
    }
    Close() {
    this.DialogRef.close();
    }
    tsauthSearch() {
    this.tsauthService.GetByIDAsync().subscribe(
    res => {
    this.tsauthService.FormData = res as tsauth;
    if (this.tsauthService.FormData.AUTH_IDX == environment.InitializationNumber) {
    }
    },
    err => {
    }
    );
    }
    tsauthSave() {
    this.tsauthService.IsShowLoading = true;
    this.tsauthService.SaveAsync().subscribe(
    res => {
    this.tsauthService.FormData = res as tsauth;
    this.NotificationService.warn(environment.SaveSuccess);
    },
    err => {
    this.NotificationService.warn(environment.SaveNotSuccess);
    },
    () => {
    this.tsauthService.IsShowLoading = false;
    }
    );
    }
    }

