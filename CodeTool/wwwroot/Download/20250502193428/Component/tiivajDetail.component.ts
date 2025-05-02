import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { tiivaj } from 'src/app/shared/MES/tiivaj.model';
import { tiivajService } from 'src/app/shared/MES/tiivaj.service';

@Component({
  selector: 'app-tiivaj-info',
  templateUrl: './tiivaj-info.component.html',
  styleUrls: ['./tiivaj-info.component.css']
})
export class tiivajDetailComponent implements OnInit {

  constructor(
    public DialogRef: MatDialogRef<tiivajDetailComponent>,    
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public tiivajService: tiivajService,
    ) {
    }

    ngOnInit(): void {

    }
    ngAfterViewInit() {
    //this.tiivajSearch();
    }
    Close() {
    this.DialogRef.close();
    }
    tiivajSearch() {
    this.tiivajService.GetByIDAsync().subscribe(
    res => {
    this.tiivajService.FormData = res as tiivaj;
    if (this.tiivajService.FormData.IVAJ_IDX == environment.InitializationNumber) {
    }
    },
    err => {
    }
    );
    }
    tiivajSave() {
    this.tiivajService.IsShowLoading = true;
    this.tiivajService.SaveAsync().subscribe(
    res => {
    this.tiivajService.FormData = res as tiivaj;
    this.NotificationService.warn(environment.SaveSuccess);
    },
    err => {
    this.NotificationService.warn(environment.SaveNotSuccess);
    },
    () => {
    this.tiivajService.IsShowLoading = false;
    }
    );
    }
    }

