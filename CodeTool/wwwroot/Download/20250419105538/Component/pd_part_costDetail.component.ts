import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { pd_part_cost } from 'src/app/shared/MES/pd_part_cost.model';
import { pd_part_costService } from 'src/app/shared/MES/pd_part_cost.service';

@Component({
  selector: 'app-pd_part_cost-info',
  templateUrl: './pd_part_cost-info.component.html',
  styleUrls: ['./pd_part_cost-info.component.css']
})
export class pd_part_costDetailComponent implements OnInit {

  constructor(
    public DialogRef: MatDialogRef<pd_part_costDetailComponent>,    
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public pd_part_costService: pd_part_costService,
    ) {
    }

    ngOnInit(): void {

    }
    ngAfterViewInit() {
    //this.pd_part_costSearch();
    }
    Close() {
    this.DialogRef.close();
    }
    pd_part_costSearch() {
    this.pd_part_costService.GetByIDAsync().subscribe(
    res => {
    this.pd_part_costService.FormData = res as pd_part_cost;
    if (this.pd_part_costService.FormData.PDCOST_IDX == environment.InitializationNumber) {
    }
    },
    err => {
    }
    );
    }
    pd_part_costSave() {
    this.pd_part_costService.IsShowLoading = true;
    this.pd_part_costService.SaveAsync().subscribe(
    res => {
    this.pd_part_costService.FormData = res as pd_part_cost;
    this.NotificationService.warn(environment.SaveSuccess);
    },
    err => {
    this.NotificationService.warn(environment.SaveNotSuccess);
    },
    () => {
    this.pd_part_costService.IsShowLoading = false;
    }
    );
    }
    }

