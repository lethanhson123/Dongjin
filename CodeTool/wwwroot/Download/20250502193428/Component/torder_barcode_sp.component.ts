import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { torder_barcode_sp } from 'src/app/shared/MES/torder_barcode_sp.model';
import { torder_barcode_spService } from 'src/app/shared/MES/torder_barcode_sp.service';

@Component({
  selector: 'app-torder_barcode_sp',
  templateUrl: './torder_barcode_sp.component.html',
  styleUrls: ['./torder_barcode_sp.component.css']
})
export class torder_barcode_spComponent implements OnInit {

  @ViewChild('torder_barcode_spSort') torder_barcode_spSort: MatSort;
  @ViewChild('torder_barcode_spPaginator') torder_barcode_spPaginator: MatPaginator;

  constructor(
    public Dialog: MatDialog,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public torder_barcode_spService: torder_barcode_spService,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.torder_barcode_spSearch();
  }
  torder_barcode_spSearch() {
    this.torder_barcode_spService.SearchAll(this.torder_barcode_spSort, this.torder_barcode_spPaginator);
  }
  torder_barcode_spSave(element: torder_barcode_sp) {
    this.torder_barcode_spService.FormData = element;
    this.NotificationService.warn(this.torder_barcode_spService.ComponentSaveAll(this.torder_barcode_spSort, this.torder_barcode_spPaginator));
  }
  torder_barcode_spDelete(element: torder_barcode_sp) {
    this.torder_barcode_spService.BaseParameter.ID = element.TORDER_BARCODE_IDX;
    this.NotificationService.warn(this.torder_barcode_spService.ComponentDeleteAll(this.torder_barcode_spSort, this.torder_barcode_spPaginator));
  }
  torder_barcode_spAdd(element: torder_barcode_sp) {
    this.torder_barcode_spService.FormData = element;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = environment.DialogConfigWidth;
    dialogConfig.data = { ID: 0 };
    const dialog = this.Dialog.open(torder_barcode_spDetailComponent, dialogConfig);
    dialog.afterClosed().subscribe(() => {
      this.torder_barcode_spSearch();
    });
  }
}
