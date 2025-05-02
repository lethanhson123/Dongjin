import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { pdpusch } from 'src/app/shared/MES/pdpusch.model';
import { pdpuschService } from 'src/app/shared/MES/pdpusch.service';

@Component({
  selector: 'app-pdpusch-info',
  templateUrl: './pdpusch-info.component.html',
  styleUrls: ['./pdpusch-info.component.css']
})
export class pdpuschDetailComponent implements OnInit {

  constructor(
    public DialogRef: MatDialogRef<pdpuschDetailComponent>,    
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public pdpuschService: pdpuschService,
    ) {
    }

    ngOnInit(): void {

    }
    ngAfterViewInit() {
    //this.pdpuschSearch();
    }
    Close() {
    this.DialogRef.close();
    }
    pdpuschSearch() {
    this.pdpuschService.GetByIDAsync().subscribe(
    res => {
    this.pdpuschService.FormData = res as pdpusch;
    if (this.pdpuschService.FormData.PDPUSCH_IDX == environment.InitializationNumber) {
    }
    },
    err => {
    }
    );
    }
    pdpuschSave() {
    this.pdpuschService.IsShowLoading = true;
    this.pdpuschService.SaveAsync().subscribe(
    res => {
    this.pdpuschService.FormData = res as pdpusch;
    this.NotificationService.warn(environment.SaveSuccess);
    },
    err => {
    this.NotificationService.warn(environment.SaveNotSuccess);
    },
    () => {
    this.pdpuschService.IsShowLoading = false;
    }
    );
    }
    }

