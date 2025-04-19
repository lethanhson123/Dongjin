import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { torder_bom_lp } from 'src/app/shared/MES/torder_bom_lp.model';
import { torder_bom_lpService } from 'src/app/shared/MES/torder_bom_lp.service';

@Component({
  selector: 'app-torder_bom_lp',
  templateUrl: './torder_bom_lp.component.html',
  styleUrls: ['./torder_bom_lp.component.css']
})
export class torder_bom_lpComponent implements OnInit {

  @ViewChild('torder_bom_lpSort') torder_bom_lpSort: MatSort;
  @ViewChild('torder_bom_lpPaginator') torder_bom_lpPaginator: MatPaginator;

  constructor(
    public Dialog: MatDialog,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public torder_bom_lpService: torder_bom_lpService,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.torder_bom_lpSearch();
  }
  torder_bom_lpSearch() {
    this.torder_bom_lpService.SearchAll(this.torder_bom_lpSort, this.torder_bom_lpPaginator);
  }
  torder_bom_lpSave(element: torder_bom_lp) {
    this.torder_bom_lpService.FormData = element;
    this.NotificationService.warn(this.torder_bom_lpService.ComponentSaveAll(this.torder_bom_lpSort, this.torder_bom_lpPaginator));
  }
  torder_bom_lpDelete(element: torder_bom_lp) {
    this.torder_bom_lpService.BaseParameter.ID = element.TORDER_BOM_IDX;
    this.NotificationService.warn(this.torder_bom_lpService.ComponentDeleteAll(this.torder_bom_lpSort, this.torder_bom_lpPaginator));
  }
  torder_bom_lpAdd(element: torder_bom_lp) {
    this.torder_bom_lpService.FormData = element;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = environment.DialogConfigWidth;
    dialogConfig.data = { ID: 0 };
    const dialog = this.Dialog.open(torder_bom_lpDetailComponent, dialogConfig);
    dialog.afterClosed().subscribe(() => {
      this.torder_bom_lpSearch();
    });
  }
}
