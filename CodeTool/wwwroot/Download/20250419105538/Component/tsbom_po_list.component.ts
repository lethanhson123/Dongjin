import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { tsbom_po_list } from 'src/app/shared/MES/tsbom_po_list.model';
import { tsbom_po_listService } from 'src/app/shared/MES/tsbom_po_list.service';

@Component({
  selector: 'app-tsbom_po_list',
  templateUrl: './tsbom_po_list.component.html',
  styleUrls: ['./tsbom_po_list.component.css']
})
export class tsbom_po_listComponent implements OnInit {

  @ViewChild('tsbom_po_listSort') tsbom_po_listSort: MatSort;
  @ViewChild('tsbom_po_listPaginator') tsbom_po_listPaginator: MatPaginator;

  constructor(
    public Dialog: MatDialog,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public tsbom_po_listService: tsbom_po_listService,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.tsbom_po_listSearch();
  }
  tsbom_po_listSearch() {
    this.tsbom_po_listService.SearchAll(this.tsbom_po_listSort, this.tsbom_po_listPaginator);
  }
  tsbom_po_listSave(element: tsbom_po_list) {
    this.tsbom_po_listService.FormData = element;
    this.NotificationService.warn(this.tsbom_po_listService.ComponentSaveAll(this.tsbom_po_listSort, this.tsbom_po_listPaginator));
  }
  tsbom_po_listDelete(element: tsbom_po_list) {
    this.tsbom_po_listService.BaseParameter.ID = element.BOM_PO_LIST_IDX;
    this.NotificationService.warn(this.tsbom_po_listService.ComponentDeleteAll(this.tsbom_po_listSort, this.tsbom_po_listPaginator));
  }
  tsbom_po_listAdd(element: tsbom_po_list) {
    this.tsbom_po_listService.FormData = element;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = environment.DialogConfigWidth;
    dialogConfig.data = { ID: 0 };
    const dialog = this.Dialog.open(tsbom_po_listDetailComponent, dialogConfig);
    dialog.afterClosed().subscribe(() => {
      this.tsbom_po_listSearch();
    });
  }
}
