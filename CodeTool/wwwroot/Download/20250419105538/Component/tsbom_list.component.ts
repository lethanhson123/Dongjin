import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { tsbom_list } from 'src/app/shared/MES/tsbom_list.model';
import { tsbom_listService } from 'src/app/shared/MES/tsbom_list.service';

@Component({
  selector: 'app-tsbom_list',
  templateUrl: './tsbom_list.component.html',
  styleUrls: ['./tsbom_list.component.css']
})
export class tsbom_listComponent implements OnInit {

  @ViewChild('tsbom_listSort') tsbom_listSort: MatSort;
  @ViewChild('tsbom_listPaginator') tsbom_listPaginator: MatPaginator;

  constructor(
    public Dialog: MatDialog,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public tsbom_listService: tsbom_listService,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.tsbom_listSearch();
  }
  tsbom_listSearch() {
    this.tsbom_listService.SearchAll(this.tsbom_listSort, this.tsbom_listPaginator);
  }
  tsbom_listSave(element: tsbom_list) {
    this.tsbom_listService.FormData = element;
    this.NotificationService.warn(this.tsbom_listService.ComponentSaveAll(this.tsbom_listSort, this.tsbom_listPaginator));
  }
  tsbom_listDelete(element: tsbom_list) {
    this.tsbom_listService.BaseParameter.ID = element.BOM_LIST_IDX;
    this.NotificationService.warn(this.tsbom_listService.ComponentDeleteAll(this.tsbom_listSort, this.tsbom_listPaginator));
  }
  tsbom_listAdd(element: tsbom_list) {
    this.tsbom_listService.FormData = element;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = environment.DialogConfigWidth;
    dialogConfig.data = { ID: 0 };
    const dialog = this.Dialog.open(tsbom_listDetailComponent, dialogConfig);
    dialog.afterClosed().subscribe(() => {
      this.tsbom_listSearch();
    });
  }
}
