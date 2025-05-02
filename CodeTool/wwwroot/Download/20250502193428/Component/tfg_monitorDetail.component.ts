import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { tfg_monitor } from 'src/app/shared/MES/tfg_monitor.model';
import { tfg_monitorService } from 'src/app/shared/MES/tfg_monitor.service';

@Component({
  selector: 'app-tfg_monitor-info',
  templateUrl: './tfg_monitor-info.component.html',
  styleUrls: ['./tfg_monitor-info.component.css']
})
export class tfg_monitorDetailComponent implements OnInit {

  constructor(
    public DialogRef: MatDialogRef<tfg_monitorDetailComponent>,    
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public tfg_monitorService: tfg_monitorService,
    ) {
    }

    ngOnInit(): void {

    }
    ngAfterViewInit() {
    //this.tfg_monitorSearch();
    }
    Close() {
    this.DialogRef.close();
    }
    tfg_monitorSearch() {
    this.tfg_monitorService.GetByIDAsync().subscribe(
    res => {
    this.tfg_monitorService.FormData = res as tfg_monitor;
    if (this.tfg_monitorService.FormData.TFG_MO_IDX == environment.InitializationNumber) {
    }
    },
    err => {
    }
    );
    }
    tfg_monitorSave() {
    this.tfg_monitorService.IsShowLoading = true;
    this.tfg_monitorService.SaveAsync().subscribe(
    res => {
    this.tfg_monitorService.FormData = res as tfg_monitor;
    this.NotificationService.warn(environment.SaveSuccess);
    },
    err => {
    this.NotificationService.warn(environment.SaveNotSuccess);
    },
    () => {
    this.tfg_monitorService.IsShowLoading = false;
    }
    );
    }
    }

