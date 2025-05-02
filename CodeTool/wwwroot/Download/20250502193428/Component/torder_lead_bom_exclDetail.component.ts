import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { torder_lead_bom_excl } from 'src/app/shared/MES/torder_lead_bom_excl.model';
import { torder_lead_bom_exclService } from 'src/app/shared/MES/torder_lead_bom_excl.service';

@Component({
  selector: 'app-torder_lead_bom_excl-info',
  templateUrl: './torder_lead_bom_excl-info.component.html',
  styleUrls: ['./torder_lead_bom_excl-info.component.css']
})
export class torder_lead_bom_exclDetailComponent implements OnInit {

  constructor(
    public DialogRef: MatDialogRef<torder_lead_bom_exclDetailComponent>,    
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public torder_lead_bom_exclService: torder_lead_bom_exclService,
    ) {
    }

    ngOnInit(): void {

    }
    ngAfterViewInit() {
    //this.torder_lead_bom_exclSearch();
    }
    Close() {
    this.DialogRef.close();
    }
    torder_lead_bom_exclSearch() {
    this.torder_lead_bom_exclService.GetByIDAsync().subscribe(
    res => {
    this.torder_lead_bom_exclService.FormData = res as torder_lead_bom_excl;
    if (this.torder_lead_bom_exclService.FormData.LEAD_INDEX == environment.InitializationNumber) {
    }
    },
    err => {
    }
    );
    }
    torder_lead_bom_exclSave() {
    this.torder_lead_bom_exclService.IsShowLoading = true;
    this.torder_lead_bom_exclService.SaveAsync().subscribe(
    res => {
    this.torder_lead_bom_exclService.FormData = res as torder_lead_bom_excl;
    this.NotificationService.warn(environment.SaveSuccess);
    },
    err => {
    this.NotificationService.warn(environment.SaveNotSuccess);
    },
    () => {
    this.torder_lead_bom_exclService.IsShowLoading = false;
    }
    );
    }
    }

