import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { tiivtr_lead_fg } from 'src/app/shared/MES/tiivtr_lead_fg.model';
import { tiivtr_lead_fgService } from 'src/app/shared/MES/tiivtr_lead_fg.service';

@Component({
  selector: 'app-tiivtr_lead_fg-info',
  templateUrl: './tiivtr_lead_fg-info.component.html',
  styleUrls: ['./tiivtr_lead_fg-info.component.css']
})
export class tiivtr_lead_fgDetailComponent implements OnInit {

  constructor(
    public DialogRef: MatDialogRef<tiivtr_lead_fgDetailComponent>,    
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public tiivtr_lead_fgService: tiivtr_lead_fgService,
    ) {
    }

    ngOnInit(): void {

    }
    ngAfterViewInit() {
    //this.tiivtr_lead_fgSearch();
    }
    Close() {
    this.DialogRef.close();
    }
    tiivtr_lead_fgSearch() {
    this.tiivtr_lead_fgService.GetByIDAsync().subscribe(
    res => {
    this.tiivtr_lead_fgService.FormData = res as tiivtr_lead_fg;
    if (this.tiivtr_lead_fgService.FormData.IV_IDX == environment.InitializationNumber) {
    }
    },
    err => {
    }
    );
    }
    tiivtr_lead_fgSave() {
    this.tiivtr_lead_fgService.IsShowLoading = true;
    this.tiivtr_lead_fgService.SaveAsync().subscribe(
    res => {
    this.tiivtr_lead_fgService.FormData = res as tiivtr_lead_fg;
    this.NotificationService.warn(environment.SaveSuccess);
    },
    err => {
    this.NotificationService.warn(environment.SaveNotSuccess);
    },
    () => {
    this.tiivtr_lead_fgService.IsShowLoading = false;
    }
    );
    }
    }

