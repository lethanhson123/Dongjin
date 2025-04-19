import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { pdcmpny } from 'src/app/shared/MES/pdcmpny.model';
import { pdcmpnyService } from 'src/app/shared/MES/pdcmpny.service';

@Component({
  selector: 'app-pdcmpny-info',
  templateUrl: './pdcmpny-info.component.html',
  styleUrls: ['./pdcmpny-info.component.css']
})
export class pdcmpnyDetailComponent implements OnInit {

  constructor(
    public DialogRef: MatDialogRef<pdcmpnyDetailComponent>,    
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public pdcmpnyService: pdcmpnyService,
    ) {
    }

    ngOnInit(): void {

    }
    ngAfterViewInit() {
    //this.pdcmpnySearch();
    }
    Close() {
    this.DialogRef.close();
    }
    pdcmpnySearch() {
    this.pdcmpnyService.GetByIDAsync().subscribe(
    res => {
    this.pdcmpnyService.FormData = res as pdcmpny;
    if (this.pdcmpnyService.FormData.CMPNY_IDX == environment.InitializationNumber) {
    }
    },
    err => {
    }
    );
    }
    pdcmpnySave() {
    this.pdcmpnyService.IsShowLoading = true;
    this.pdcmpnyService.SaveAsync().subscribe(
    res => {
    this.pdcmpnyService.FormData = res as pdcmpny;
    this.NotificationService.warn(environment.SaveSuccess);
    },
    err => {
    this.NotificationService.warn(environment.SaveNotSuccess);
    },
    () => {
    this.pdcmpnyService.IsShowLoading = false;
    }
    );
    }
    }

