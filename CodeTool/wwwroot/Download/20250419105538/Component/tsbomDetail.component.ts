import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { tsbom } from 'src/app/shared/MES/tsbom.model';
import { tsbomService } from 'src/app/shared/MES/tsbom.service';

@Component({
  selector: 'app-tsbom-info',
  templateUrl: './tsbom-info.component.html',
  styleUrls: ['./tsbom-info.component.css']
})
export class tsbomDetailComponent implements OnInit {

  constructor(
    public DialogRef: MatDialogRef<tsbomDetailComponent>,    
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public tsbomService: tsbomService,
    ) {
    }

    ngOnInit(): void {

    }
    ngAfterViewInit() {
    //this.tsbomSearch();
    }
    Close() {
    this.DialogRef.close();
    }
    tsbomSearch() {
    this.tsbomService.GetByIDAsync().subscribe(
    res => {
    this.tsbomService.FormData = res as tsbom;
    if (this.tsbomService.FormData.BOM_IDX == environment.InitializationNumber) {
    }
    },
    err => {
    }
    );
    }
    tsbomSave() {
    this.tsbomService.IsShowLoading = true;
    this.tsbomService.SaveAsync().subscribe(
    res => {
    this.tsbomService.FormData = res as tsbom;
    this.NotificationService.warn(environment.SaveSuccess);
    },
    err => {
    this.NotificationService.warn(environment.SaveNotSuccess);
    },
    () => {
    this.tsbomService.IsShowLoading = false;
    }
    );
    }
    }

