import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { tiivtr_lead } from 'src/app/shared/MES/tiivtr_lead.model';
import { tiivtr_leadService } from 'src/app/shared/MES/tiivtr_lead.service';

@Component({
  selector: 'app-tiivtr_lead-info',
  templateUrl: './tiivtr_lead-info.component.html',
  styleUrls: ['./tiivtr_lead-info.component.css']
})
export class tiivtr_leadDetailComponent implements OnInit {

  constructor(
    public DialogRef: MatDialogRef<tiivtr_leadDetailComponent>,    
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public tiivtr_leadService: tiivtr_leadService,
    ) {
    }

    ngOnInit(): void {

    }
    ngAfterViewInit() {
    //this.tiivtr_leadSearch();
    }
    Close() {
    this.DialogRef.close();
    }
    tiivtr_leadSearch() {
    this.tiivtr_leadService.GetByIDAsync().subscribe(
    res => {
    this.tiivtr_leadService.FormData = res as tiivtr_lead;
    if (this.tiivtr_leadService.FormData.IV_IDX == environment.InitializationNumber) {
    }
    },
    err => {
    }
    );
    }
    tiivtr_leadSave() {
    this.tiivtr_leadService.IsShowLoading = true;
    this.tiivtr_leadService.SaveAsync().subscribe(
    res => {
    this.tiivtr_leadService.FormData = res as tiivtr_lead;
    this.NotificationService.warn(environment.SaveSuccess);
    },
    err => {
    this.NotificationService.warn(environment.SaveNotSuccess);
    },
    () => {
    this.tiivtr_leadService.IsShowLoading = false;
    }
    );
    }
    }

