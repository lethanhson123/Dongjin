import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { pd_cmpny_part } from 'src/app/shared/MES/pd_cmpny_part.model';
import { pd_cmpny_partService } from 'src/app/shared/MES/pd_cmpny_part.service';

@Component({
  selector: 'app-pd_cmpny_part-info',
  templateUrl: './pd_cmpny_part-info.component.html',
  styleUrls: ['./pd_cmpny_part-info.component.css']
})
export class pd_cmpny_partDetailComponent implements OnInit {

  constructor(
    public DialogRef: MatDialogRef<pd_cmpny_partDetailComponent>,    
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public pd_cmpny_partService: pd_cmpny_partService,
    ) {
    }

    ngOnInit(): void {

    }
    ngAfterViewInit() {
    //this.pd_cmpny_partSearch();
    }
    Close() {
    this.DialogRef.close();
    }
    pd_cmpny_partSearch() {
    this.pd_cmpny_partService.GetByIDAsync().subscribe(
    res => {
    this.pd_cmpny_partService.FormData = res as pd_cmpny_part;
    if (this.pd_cmpny_partService.FormData.PD_CMPNY_PART_IDX == environment.InitializationNumber) {
    }
    },
    err => {
    }
    );
    }
    pd_cmpny_partSave() {
    this.pd_cmpny_partService.IsShowLoading = true;
    this.pd_cmpny_partService.SaveAsync().subscribe(
    res => {
    this.pd_cmpny_partService.FormData = res as pd_cmpny_part;
    this.NotificationService.warn(environment.SaveSuccess);
    },
    err => {
    this.NotificationService.warn(environment.SaveNotSuccess);
    },
    () => {
    this.pd_cmpny_partService.IsShowLoading = false;
    }
    );
    }
    }

