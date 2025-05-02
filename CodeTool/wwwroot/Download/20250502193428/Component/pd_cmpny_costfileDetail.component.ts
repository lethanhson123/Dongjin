import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { pd_cmpny_costfile } from 'src/app/shared/MES/pd_cmpny_costfile.model';
import { pd_cmpny_costfileService } from 'src/app/shared/MES/pd_cmpny_costfile.service';

@Component({
  selector: 'app-pd_cmpny_costfile-info',
  templateUrl: './pd_cmpny_costfile-info.component.html',
  styleUrls: ['./pd_cmpny_costfile-info.component.css']
})
export class pd_cmpny_costfileDetailComponent implements OnInit {

  constructor(
    public DialogRef: MatDialogRef<pd_cmpny_costfileDetailComponent>,    
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public pd_cmpny_costfileService: pd_cmpny_costfileService,
    ) {
    }

    ngOnInit(): void {

    }
    ngAfterViewInit() {
    //this.pd_cmpny_costfileSearch();
    }
    Close() {
    this.DialogRef.close();
    }
    pd_cmpny_costfileSearch() {
    this.pd_cmpny_costfileService.GetByIDAsync().subscribe(
    res => {
    this.pd_cmpny_costfileService.FormData = res as pd_cmpny_costfile;
    if (this.pd_cmpny_costfileService.FormData.PD_CMPNY_PART_IDX == environment.InitializationNumber) {
    }
    },
    err => {
    }
    );
    }
    pd_cmpny_costfileSave() {
    this.pd_cmpny_costfileService.IsShowLoading = true;
    this.pd_cmpny_costfileService.SaveAsync().subscribe(
    res => {
    this.pd_cmpny_costfileService.FormData = res as pd_cmpny_costfile;
    this.NotificationService.warn(environment.SaveSuccess);
    },
    err => {
    this.NotificationService.warn(environment.SaveNotSuccess);
    },
    () => {
    this.pd_cmpny_costfileService.IsShowLoading = false;
    }
    );
    }
    }

