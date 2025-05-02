import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { tdd_poplan } from 'src/app/shared/MES/tdd_poplan.model';
import { tdd_poplanService } from 'src/app/shared/MES/tdd_poplan.service';

@Component({
  selector: 'app-tdd_poplan-info',
  templateUrl: './tdd_poplan-info.component.html',
  styleUrls: ['./tdd_poplan-info.component.css']
})
export class tdd_poplanDetailComponent implements OnInit {

  constructor(
    public DialogRef: MatDialogRef<tdd_poplanDetailComponent>,    
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public tdd_poplanService: tdd_poplanService,
    ) {
    }

    ngOnInit(): void {

    }
    ngAfterViewInit() {
    //this.tdd_poplanSearch();
    }
    Close() {
    this.DialogRef.close();
    }
    tdd_poplanSearch() {
    this.tdd_poplanService.GetByIDAsync().subscribe(
    res => {
    this.tdd_poplanService.FormData = res as tdd_poplan;
    if (this.tdd_poplanService.FormData.TDD_PP_IDX == environment.InitializationNumber) {
    }
    },
    err => {
    }
    );
    }
    tdd_poplanSave() {
    this.tdd_poplanService.IsShowLoading = true;
    this.tdd_poplanService.SaveAsync().subscribe(
    res => {
    this.tdd_poplanService.FormData = res as tdd_poplan;
    this.NotificationService.warn(environment.SaveSuccess);
    },
    err => {
    this.NotificationService.warn(environment.SaveNotSuccess);
    },
    () => {
    this.tdd_poplanService.IsShowLoading = false;
    }
    );
    }
    }

