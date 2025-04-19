import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { aatable } from 'src/app/shared/MES/aatable.model';
import { aatableService } from 'src/app/shared/MES/aatable.service';

@Component({
  selector: 'app-aatable-info',
  templateUrl: './aatable-info.component.html',
  styleUrls: ['./aatable-info.component.css']
})
export class aatableDetailComponent implements OnInit {

  constructor(
    public DialogRef: MatDialogRef<aatableDetailComponent>,    
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public aatableService: aatableService,
    ) {
    }

    ngOnInit(): void {

    }
    ngAfterViewInit() {
    //this.aatableSearch();
    }
    Close() {
    this.DialogRef.close();
    }
    aatableSearch() {
    this.aatableService.GetByIDAsync().subscribe(
    res => {
    this.aatableService.FormData = res as aatable;
    if (this.aatableService.FormData.ID == environment.InitializationNumber) {
    }
    },
    err => {
    }
    );
    }
    aatableSave() {
    this.aatableService.IsShowLoading = true;
    this.aatableService.SaveAsync().subscribe(
    res => {
    this.aatableService.FormData = res as aatable;
    this.NotificationService.warn(environment.SaveSuccess);
    },
    err => {
    this.NotificationService.warn(environment.SaveNotSuccess);
    },
    () => {
    this.aatableService.IsShowLoading = false;
    }
    );
    }
    }

