import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { twwkar } from 'src/app/shared/MES/twwkar.model';
import { twwkarService } from 'src/app/shared/MES/twwkar.service';

@Component({
  selector: 'app-twwkar-info',
  templateUrl: './twwkar-info.component.html',
  styleUrls: ['./twwkar-info.component.css']
})
export class twwkarDetailComponent implements OnInit {

  constructor(
    public DialogRef: MatDialogRef<twwkarDetailComponent>,    
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public twwkarService: twwkarService,
    ) {
    }

    ngOnInit(): void {

    }
    ngAfterViewInit() {
    //this.twwkarSearch();
    }
    Close() {
    this.DialogRef.close();
    }
    twwkarSearch() {
    this.twwkarService.GetByIDAsync().subscribe(
    res => {
    this.twwkarService.FormData = res as twwkar;
    if (this.twwkarService.FormData.WK_IDX == environment.InitializationNumber) {
    }
    },
    err => {
    }
    );
    }
    twwkarSave() {
    this.twwkarService.IsShowLoading = true;
    this.twwkarService.SaveAsync().subscribe(
    res => {
    this.twwkarService.FormData = res as twwkar;
    this.NotificationService.warn(environment.SaveSuccess);
    },
    err => {
    this.NotificationService.warn(environment.SaveNotSuccess);
    },
    () => {
    this.twwkarService.IsShowLoading = false;
    }
    );
    }
    }

