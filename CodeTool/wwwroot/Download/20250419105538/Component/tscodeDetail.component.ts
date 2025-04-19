import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { tscode } from 'src/app/shared/MES/tscode.model';
import { tscodeService } from 'src/app/shared/MES/tscode.service';

@Component({
  selector: 'app-tscode-info',
  templateUrl: './tscode-info.component.html',
  styleUrls: ['./tscode-info.component.css']
})
export class tscodeDetailComponent implements OnInit {

  constructor(
    public DialogRef: MatDialogRef<tscodeDetailComponent>,    
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public tscodeService: tscodeService,
    ) {
    }

    ngOnInit(): void {

    }
    ngAfterViewInit() {
    //this.tscodeSearch();
    }
    Close() {
    this.DialogRef.close();
    }
    tscodeSearch() {
    this.tscodeService.GetByIDAsync().subscribe(
    res => {
    this.tscodeService.FormData = res as tscode;
    if (this.tscodeService.FormData.CD_IDX == environment.InitializationNumber) {
    }
    },
    err => {
    }
    );
    }
    tscodeSave() {
    this.tscodeService.IsShowLoading = true;
    this.tscodeService.SaveAsync().subscribe(
    res => {
    this.tscodeService.FormData = res as tscode;
    this.NotificationService.warn(environment.SaveSuccess);
    },
    err => {
    this.NotificationService.warn(environment.SaveNotSuccess);
    },
    () => {
    this.tscodeService.IsShowLoading = false;
    }
    );
    }
    }

