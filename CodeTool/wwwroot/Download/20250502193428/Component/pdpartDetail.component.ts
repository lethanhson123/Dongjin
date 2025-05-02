import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { pdpart } from 'src/app/shared/MES/pdpart.model';
import { pdpartService } from 'src/app/shared/MES/pdpart.service';

@Component({
  selector: 'app-pdpart-info',
  templateUrl: './pdpart-info.component.html',
  styleUrls: ['./pdpart-info.component.css']
})
export class pdpartDetailComponent implements OnInit {

  constructor(
    public DialogRef: MatDialogRef<pdpartDetailComponent>,    
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public pdpartService: pdpartService,
    ) {
    }

    ngOnInit(): void {

    }
    ngAfterViewInit() {
    //this.pdpartSearch();
    }
    Close() {
    this.DialogRef.close();
    }
    pdpartSearch() {
    this.pdpartService.GetByIDAsync().subscribe(
    res => {
    this.pdpartService.FormData = res as pdpart;
    if (this.pdpartService.FormData.PDPART_IDX == environment.InitializationNumber) {
    }
    },
    err => {
    }
    );
    }
    pdpartSave() {
    this.pdpartService.IsShowLoading = true;
    this.pdpartService.SaveAsync().subscribe(
    res => {
    this.pdpartService.FormData = res as pdpart;
    this.NotificationService.warn(environment.SaveSuccess);
    },
    err => {
    this.NotificationService.warn(environment.SaveNotSuccess);
    },
    () => {
    this.pdpartService.IsShowLoading = false;
    }
    );
    }
    }

