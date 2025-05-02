import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { tdpdotpl_label } from 'src/app/shared/MES/tdpdotpl_label.model';
import { tdpdotpl_labelService } from 'src/app/shared/MES/tdpdotpl_label.service';

@Component({
  selector: 'app-tdpdotpl_label-info',
  templateUrl: './tdpdotpl_label-info.component.html',
  styleUrls: ['./tdpdotpl_label-info.component.css']
})
export class tdpdotpl_labelDetailComponent implements OnInit {

  constructor(
    public DialogRef: MatDialogRef<tdpdotpl_labelDetailComponent>,    
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public tdpdotpl_labelService: tdpdotpl_labelService,
    ) {
    }

    ngOnInit(): void {

    }
    ngAfterViewInit() {
    //this.tdpdotpl_labelSearch();
    }
    Close() {
    this.DialogRef.close();
    }
    tdpdotpl_labelSearch() {
    this.tdpdotpl_labelService.GetByIDAsync().subscribe(
    res => {
    this.tdpdotpl_labelService.FormData = res as tdpdotpl_label;
    if (this.tdpdotpl_labelService.FormData.PDOTPL_IDX == environment.InitializationNumber) {
    }
    },
    err => {
    }
    );
    }
    tdpdotpl_labelSave() {
    this.tdpdotpl_labelService.IsShowLoading = true;
    this.tdpdotpl_labelService.SaveAsync().subscribe(
    res => {
    this.tdpdotpl_labelService.FormData = res as tdpdotpl_label;
    this.NotificationService.warn(environment.SaveSuccess);
    },
    err => {
    this.NotificationService.warn(environment.SaveNotSuccess);
    },
    () => {
    this.tdpdotpl_labelService.IsShowLoading = false;
    }
    );
    }
    }

