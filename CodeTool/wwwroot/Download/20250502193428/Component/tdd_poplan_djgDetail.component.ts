import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { tdd_poplan_djg } from 'src/app/shared/MES/tdd_poplan_djg.model';
import { tdd_poplan_djgService } from 'src/app/shared/MES/tdd_poplan_djg.service';

@Component({
  selector: 'app-tdd_poplan_djg-info',
  templateUrl: './tdd_poplan_djg-info.component.html',
  styleUrls: ['./tdd_poplan_djg-info.component.css']
})
export class tdd_poplan_djgDetailComponent implements OnInit {

  constructor(
    public DialogRef: MatDialogRef<tdd_poplan_djgDetailComponent>,    
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public tdd_poplan_djgService: tdd_poplan_djgService,
    ) {
    }

    ngOnInit(): void {

    }
    ngAfterViewInit() {
    //this.tdd_poplan_djgSearch();
    }
    Close() {
    this.DialogRef.close();
    }
    tdd_poplan_djgSearch() {
    this.tdd_poplan_djgService.GetByIDAsync().subscribe(
    res => {
    this.tdd_poplan_djgService.FormData = res as tdd_poplan_djg;
    if (this.tdd_poplan_djgService.FormData.TDD_PPD_IDX == environment.InitializationNumber) {
    }
    },
    err => {
    }
    );
    }
    tdd_poplan_djgSave() {
    this.tdd_poplan_djgService.IsShowLoading = true;
    this.tdd_poplan_djgService.SaveAsync().subscribe(
    res => {
    this.tdd_poplan_djgService.FormData = res as tdd_poplan_djg;
    this.NotificationService.warn(environment.SaveSuccess);
    },
    err => {
    this.NotificationService.warn(environment.SaveNotSuccess);
    },
    () => {
    this.tdd_poplan_djgService.IsShowLoading = false;
    }
    );
    }
    }

