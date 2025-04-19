import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { twtool } from 'src/app/shared/MES/twtool.model';
import { twtoolService } from 'src/app/shared/MES/twtool.service';

@Component({
  selector: 'app-twtool-info',
  templateUrl: './twtool-info.component.html',
  styleUrls: ['./twtool-info.component.css']
})
export class twtoolDetailComponent implements OnInit {

  constructor(
    public DialogRef: MatDialogRef<twtoolDetailComponent>,    
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public twtoolService: twtoolService,
    ) {
    }

    ngOnInit(): void {

    }
    ngAfterViewInit() {
    //this.twtoolSearch();
    }
    Close() {
    this.DialogRef.close();
    }
    twtoolSearch() {
    this.twtoolService.GetByIDAsync().subscribe(
    res => {
    this.twtoolService.FormData = res as twtool;
    if (this.twtoolService.FormData.TOOLWORK_IDX == environment.InitializationNumber) {
    }
    },
    err => {
    }
    );
    }
    twtoolSave() {
    this.twtoolService.IsShowLoading = true;
    this.twtoolService.SaveAsync().subscribe(
    res => {
    this.twtoolService.FormData = res as twtool;
    this.NotificationService.warn(environment.SaveSuccess);
    },
    err => {
    this.NotificationService.warn(environment.SaveNotSuccess);
    },
    () => {
    this.twtoolService.IsShowLoading = false;
    }
    );
    }
    }

