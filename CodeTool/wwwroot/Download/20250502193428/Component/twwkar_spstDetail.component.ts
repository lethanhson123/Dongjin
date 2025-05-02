import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { twwkar_spst } from 'src/app/shared/MES/twwkar_spst.model';
import { twwkar_spstService } from 'src/app/shared/MES/twwkar_spst.service';

@Component({
  selector: 'app-twwkar_spst-info',
  templateUrl: './twwkar_spst-info.component.html',
  styleUrls: ['./twwkar_spst-info.component.css']
})
export class twwkar_spstDetailComponent implements OnInit {

  constructor(
    public DialogRef: MatDialogRef<twwkar_spstDetailComponent>,    
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public twwkar_spstService: twwkar_spstService,
    ) {
    }

    ngOnInit(): void {

    }
    ngAfterViewInit() {
    //this.twwkar_spstSearch();
    }
    Close() {
    this.DialogRef.close();
    }
    twwkar_spstSearch() {
    this.twwkar_spstService.GetByIDAsync().subscribe(
    res => {
    this.twwkar_spstService.FormData = res as twwkar_spst;
    if (this.twwkar_spstService.FormData.WK_IDX == environment.InitializationNumber) {
    }
    },
    err => {
    }
    );
    }
    twwkar_spstSave() {
    this.twwkar_spstService.IsShowLoading = true;
    this.twwkar_spstService.SaveAsync().subscribe(
    res => {
    this.twwkar_spstService.FormData = res as twwkar_spst;
    this.NotificationService.warn(environment.SaveSuccess);
    },
    err => {
    this.NotificationService.warn(environment.SaveNotSuccess);
    },
    () => {
    this.twwkar_spstService.IsShowLoading = false;
    }
    );
    }
    }

