import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { kr_tdd_poplan } from 'src/app/shared/MES/kr_tdd_poplan.model';
import { kr_tdd_poplanService } from 'src/app/shared/MES/kr_tdd_poplan.service';

@Component({
  selector: 'app-kr_tdd_poplan-info',
  templateUrl: './kr_tdd_poplan-info.component.html',
  styleUrls: ['./kr_tdd_poplan-info.component.css']
})
export class kr_tdd_poplanDetailComponent implements OnInit {

  constructor(
    public DialogRef: MatDialogRef<kr_tdd_poplanDetailComponent>,    
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public kr_tdd_poplanService: kr_tdd_poplanService,
    ) {
    }

    ngOnInit(): void {

    }
    ngAfterViewInit() {
    //this.kr_tdd_poplanSearch();
    }
    Close() {
    this.DialogRef.close();
    }
    kr_tdd_poplanSearch() {
    this.kr_tdd_poplanService.GetByIDAsync().subscribe(
    res => {
    this.kr_tdd_poplanService.FormData = res as kr_tdd_poplan;
    if (this.kr_tdd_poplanService.FormData.TDD_PP_IDX == environment.InitializationNumber) {
    }
    },
    err => {
    }
    );
    }
    kr_tdd_poplanSave() {
    this.kr_tdd_poplanService.IsShowLoading = true;
    this.kr_tdd_poplanService.SaveAsync().subscribe(
    res => {
    this.kr_tdd_poplanService.FormData = res as kr_tdd_poplan;
    this.NotificationService.warn(environment.SaveSuccess);
    },
    err => {
    this.NotificationService.warn(environment.SaveNotSuccess);
    },
    () => {
    this.kr_tdd_poplanService.IsShowLoading = false;
    }
    );
    }
    }

