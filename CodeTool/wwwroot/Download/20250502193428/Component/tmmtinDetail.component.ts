import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { tmmtin } from 'src/app/shared/MES/tmmtin.model';
import { tmmtinService } from 'src/app/shared/MES/tmmtin.service';

@Component({
  selector: 'app-tmmtin-info',
  templateUrl: './tmmtin-info.component.html',
  styleUrls: ['./tmmtin-info.component.css']
})
export class tmmtinDetailComponent implements OnInit {

  constructor(
    public DialogRef: MatDialogRef<tmmtinDetailComponent>,    
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public tmmtinService: tmmtinService,
    ) {
    }

    ngOnInit(): void {

    }
    ngAfterViewInit() {
    //this.tmmtinSearch();
    }
    Close() {
    this.DialogRef.close();
    }
    tmmtinSearch() {
    this.tmmtinService.GetByIDAsync().subscribe(
    res => {
    this.tmmtinService.FormData = res as tmmtin;
    if (this.tmmtinService.FormData.MTIN_IDX == environment.InitializationNumber) {
    }
    },
    err => {
    }
    );
    }
    tmmtinSave() {
    this.tmmtinService.IsShowLoading = true;
    this.tmmtinService.SaveAsync().subscribe(
    res => {
    this.tmmtinService.FormData = res as tmmtin;
    this.NotificationService.warn(environment.SaveSuccess);
    },
    err => {
    this.NotificationService.warn(environment.SaveNotSuccess);
    },
    () => {
    this.tmmtinService.IsShowLoading = false;
    }
    );
    }
    }

