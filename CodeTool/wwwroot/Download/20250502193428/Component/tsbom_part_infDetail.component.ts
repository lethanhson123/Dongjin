import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { tsbom_part_inf } from 'src/app/shared/MES/tsbom_part_inf.model';
import { tsbom_part_infService } from 'src/app/shared/MES/tsbom_part_inf.service';

@Component({
  selector: 'app-tsbom_part_inf-info',
  templateUrl: './tsbom_part_inf-info.component.html',
  styleUrls: ['./tsbom_part_inf-info.component.css']
})
export class tsbom_part_infDetailComponent implements OnInit {

  constructor(
    public DialogRef: MatDialogRef<tsbom_part_infDetailComponent>,    
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public tsbom_part_infService: tsbom_part_infService,
    ) {
    }

    ngOnInit(): void {

    }
    ngAfterViewInit() {
    //this.tsbom_part_infSearch();
    }
    Close() {
    this.DialogRef.close();
    }
    tsbom_part_infSearch() {
    this.tsbom_part_infService.GetByIDAsync().subscribe(
    res => {
    this.tsbom_part_infService.FormData = res as tsbom_part_inf;
    if (this.tsbom_part_infService.FormData.INF_BOM_IDX == environment.InitializationNumber) {
    }
    },
    err => {
    }
    );
    }
    tsbom_part_infSave() {
    this.tsbom_part_infService.IsShowLoading = true;
    this.tsbom_part_infService.SaveAsync().subscribe(
    res => {
    this.tsbom_part_infService.FormData = res as tsbom_part_inf;
    this.NotificationService.warn(environment.SaveSuccess);
    },
    err => {
    this.NotificationService.warn(environment.SaveNotSuccess);
    },
    () => {
    this.tsbom_part_infService.IsShowLoading = false;
    }
    );
    }
    }

