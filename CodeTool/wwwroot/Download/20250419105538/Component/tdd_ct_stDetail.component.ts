import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { tdd_ct_st } from 'src/app/shared/MES/tdd_ct_st.model';
import { tdd_ct_stService } from 'src/app/shared/MES/tdd_ct_st.service';

@Component({
  selector: 'app-tdd_ct_st-info',
  templateUrl: './tdd_ct_st-info.component.html',
  styleUrls: ['./tdd_ct_st-info.component.css']
})
export class tdd_ct_stDetailComponent implements OnInit {

  constructor(
    public DialogRef: MatDialogRef<tdd_ct_stDetailComponent>,    
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public tdd_ct_stService: tdd_ct_stService,
    ) {
    }

    ngOnInit(): void {

    }
    ngAfterViewInit() {
    //this.tdd_ct_stSearch();
    }
    Close() {
    this.DialogRef.close();
    }
    tdd_ct_stSearch() {
    this.tdd_ct_stService.GetByIDAsync().subscribe(
    res => {
    this.tdd_ct_stService.FormData = res as tdd_ct_st;
    if (this.tdd_ct_stService.FormData.TDD_CT_IDX == environment.InitializationNumber) {
    }
    },
    err => {
    }
    );
    }
    tdd_ct_stSave() {
    this.tdd_ct_stService.IsShowLoading = true;
    this.tdd_ct_stService.SaveAsync().subscribe(
    res => {
    this.tdd_ct_stService.FormData = res as tdd_ct_st;
    this.NotificationService.warn(environment.SaveSuccess);
    },
    err => {
    this.NotificationService.warn(environment.SaveNotSuccess);
    },
    () => {
    this.tdd_ct_stService.IsShowLoading = false;
    }
    );
    }
    }

