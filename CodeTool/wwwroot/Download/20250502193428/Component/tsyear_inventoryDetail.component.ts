import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { tsyear_inventory } from 'src/app/shared/MES/tsyear_inventory.model';
import { tsyear_inventoryService } from 'src/app/shared/MES/tsyear_inventory.service';

@Component({
  selector: 'app-tsyear_inventory-info',
  templateUrl: './tsyear_inventory-info.component.html',
  styleUrls: ['./tsyear_inventory-info.component.css']
})
export class tsyear_inventoryDetailComponent implements OnInit {

  constructor(
    public DialogRef: MatDialogRef<tsyear_inventoryDetailComponent>,    
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public tsyear_inventoryService: tsyear_inventoryService,
    ) {
    }

    ngOnInit(): void {

    }
    ngAfterViewInit() {
    //this.tsyear_inventorySearch();
    }
    Close() {
    this.DialogRef.close();
    }
    tsyear_inventorySearch() {
    this.tsyear_inventoryService.GetByIDAsync().subscribe(
    res => {
    this.tsyear_inventoryService.FormData = res as tsyear_inventory;
    if (this.tsyear_inventoryService.FormData.TSYEAR_INV_IDX == environment.InitializationNumber) {
    }
    },
    err => {
    }
    );
    }
    tsyear_inventorySave() {
    this.tsyear_inventoryService.IsShowLoading = true;
    this.tsyear_inventoryService.SaveAsync().subscribe(
    res => {
    this.tsyear_inventoryService.FormData = res as tsyear_inventory;
    this.NotificationService.warn(environment.SaveSuccess);
    },
    err => {
    this.NotificationService.warn(environment.SaveNotSuccess);
    },
    () => {
    this.tsyear_inventoryService.IsShowLoading = false;
    }
    );
    }
    }

