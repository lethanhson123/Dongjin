import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { tsbom_ver02 } from 'src/app/shared/MES/tsbom_ver02.model';
import { tsbom_ver02Service } from 'src/app/shared/MES/tsbom_ver02.service';

@Component({
  selector: 'app-tsbom_ver02-info',
  templateUrl: './tsbom_ver02-info.component.html',
  styleUrls: ['./tsbom_ver02-info.component.css']
})
export class tsbom_ver02DetailComponent implements OnInit {

  constructor(
    public DialogRef: MatDialogRef<tsbom_ver02DetailComponent>,    
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public tsbom_ver02Service: tsbom_ver02Service,
    ) {
    }

    ngOnInit(): void {

    }
    ngAfterViewInit() {
    //this.tsbom_ver02Search();
    }
    Close() {
    this.DialogRef.close();
    }
    tsbom_ver02Search() {
    this.tsbom_ver02Service.GetByIDAsync().subscribe(
    res => {
    this.tsbom_ver02Service.FormData = res as tsbom_ver02;
    if (this.tsbom_ver02Service.FormData.BOM_IDX == environment.InitializationNumber) {
    }
    },
    err => {
    }
    );
    }
    tsbom_ver02Save() {
    this.tsbom_ver02Service.IsShowLoading = true;
    this.tsbom_ver02Service.SaveAsync().subscribe(
    res => {
    this.tsbom_ver02Service.FormData = res as tsbom_ver02;
    this.NotificationService.warn(environment.SaveSuccess);
    },
    err => {
    this.NotificationService.warn(environment.SaveNotSuccess);
    },
    () => {
    this.tsbom_ver02Service.IsShowLoading = false;
    }
    );
    }
    }

