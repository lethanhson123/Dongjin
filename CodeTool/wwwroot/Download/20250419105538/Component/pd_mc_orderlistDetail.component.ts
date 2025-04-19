import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { pd_mc_orderlist } from 'src/app/shared/MES/pd_mc_orderlist.model';
import { pd_mc_orderlistService } from 'src/app/shared/MES/pd_mc_orderlist.service';

@Component({
  selector: 'app-pd_mc_orderlist-info',
  templateUrl: './pd_mc_orderlist-info.component.html',
  styleUrls: ['./pd_mc_orderlist-info.component.css']
})
export class pd_mc_orderlistDetailComponent implements OnInit {

  constructor(
    public DialogRef: MatDialogRef<pd_mc_orderlistDetailComponent>,    
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public pd_mc_orderlistService: pd_mc_orderlistService,
    ) {
    }

    ngOnInit(): void {

    }
    ngAfterViewInit() {
    //this.pd_mc_orderlistSearch();
    }
    Close() {
    this.DialogRef.close();
    }
    pd_mc_orderlistSearch() {
    this.pd_mc_orderlistService.GetByIDAsync().subscribe(
    res => {
    this.pd_mc_orderlistService.FormData = res as pd_mc_orderlist;
    if (this.pd_mc_orderlistService.FormData.PD_MC_ORDER_IDX == environment.InitializationNumber) {
    }
    },
    err => {
    }
    );
    }
    pd_mc_orderlistSave() {
    this.pd_mc_orderlistService.IsShowLoading = true;
    this.pd_mc_orderlistService.SaveAsync().subscribe(
    res => {
    this.pd_mc_orderlistService.FormData = res as pd_mc_orderlist;
    this.NotificationService.warn(environment.SaveSuccess);
    },
    err => {
    this.NotificationService.warn(environment.SaveNotSuccess);
    },
    () => {
    this.pd_mc_orderlistService.IsShowLoading = false;
    }
    );
    }
    }

