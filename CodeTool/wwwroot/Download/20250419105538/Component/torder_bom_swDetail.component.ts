import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { torder_bom_sw } from 'src/app/shared/MES/torder_bom_sw.model';
import { torder_bom_swService } from 'src/app/shared/MES/torder_bom_sw.service';

@Component({
  selector: 'app-torder_bom_sw-info',
  templateUrl: './torder_bom_sw-info.component.html',
  styleUrls: ['./torder_bom_sw-info.component.css']
})
export class torder_bom_swDetailComponent implements OnInit {

  constructor(
    public DialogRef: MatDialogRef<torder_bom_swDetailComponent>,    
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public torder_bom_swService: torder_bom_swService,
    ) {
    }

    ngOnInit(): void {

    }
    ngAfterViewInit() {
    //this.torder_bom_swSearch();
    }
    Close() {
    this.DialogRef.close();
    }
    torder_bom_swSearch() {
    this.torder_bom_swService.GetByIDAsync().subscribe(
    res => {
    this.torder_bom_swService.FormData = res as torder_bom_sw;
    if (this.torder_bom_swService.FormData.TORDER_BOM_IDX == environment.InitializationNumber) {
    }
    },
    err => {
    }
    );
    }
    torder_bom_swSave() {
    this.torder_bom_swService.IsShowLoading = true;
    this.torder_bom_swService.SaveAsync().subscribe(
    res => {
    this.torder_bom_swService.FormData = res as torder_bom_sw;
    this.NotificationService.warn(environment.SaveSuccess);
    },
    err => {
    this.NotificationService.warn(environment.SaveNotSuccess);
    },
    () => {
    this.torder_bom_swService.IsShowLoading = false;
    }
    );
    }
    }

