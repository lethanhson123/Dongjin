import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { tsyear_inventory } from 'src/app/shared/MES/tsyear_inventory.model';
import { tsyear_inventoryService } from 'src/app/shared/MES/tsyear_inventory.service';

@Component({
  selector: 'app-tsyear_inventory',
  templateUrl: './tsyear_inventory.component.html',
  styleUrls: ['./tsyear_inventory.component.css']
})
export class tsyear_inventoryComponent implements OnInit {

  @ViewChild('tsyear_inventorySort') tsyear_inventorySort: MatSort;
  @ViewChild('tsyear_inventoryPaginator') tsyear_inventoryPaginator: MatPaginator;

  constructor(
    public Dialog: MatDialog,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public tsyear_inventoryService: tsyear_inventoryService,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.tsyear_inventorySearch();
  }
  tsyear_inventorySearch() {
    this.tsyear_inventoryService.SearchAll(this.tsyear_inventorySort, this.tsyear_inventoryPaginator);
  }
  tsyear_inventorySave(element: tsyear_inventory) {
    this.tsyear_inventoryService.FormData = element;
    this.NotificationService.warn(this.tsyear_inventoryService.ComponentSaveAll(this.tsyear_inventorySort, this.tsyear_inventoryPaginator));
  }
  tsyear_inventoryDelete(element: tsyear_inventory) {
    this.tsyear_inventoryService.BaseParameter.ID = element.TSYEAR_INV_IDX;
    this.NotificationService.warn(this.tsyear_inventoryService.ComponentDeleteAll(this.tsyear_inventorySort, this.tsyear_inventoryPaginator));
  }
  tsyear_inventoryAdd(element: tsyear_inventory) {
    this.tsyear_inventoryService.FormData = element;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = environment.DialogConfigWidth;
    dialogConfig.data = { ID: 0 };
    const dialog = this.Dialog.open(tsyear_inventoryDetailComponent, dialogConfig);
    dialog.afterClosed().subscribe(() => {
      this.tsyear_inventorySearch();
    });
  }
}
