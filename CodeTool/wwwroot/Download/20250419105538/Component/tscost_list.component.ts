import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { tscost_list } from 'src/app/shared/MES/tscost_list.model';
import { tscost_listService } from 'src/app/shared/MES/tscost_list.service';

@Component({
  selector: 'app-tscost_list',
  templateUrl: './tscost_list.component.html',
  styleUrls: ['./tscost_list.component.css']
})
export class tscost_listComponent implements OnInit {

  @ViewChild('tscost_listSort') tscost_listSort: MatSort;
  @ViewChild('tscost_listPaginator') tscost_listPaginator: MatPaginator;

  constructor(
    public Dialog: MatDialog,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public tscost_listService: tscost_listService,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.tscost_listSearch();
  }
  tscost_listSearch() {
    this.tscost_listService.SearchAll(this.tscost_listSort, this.tscost_listPaginator);
  }
  tscost_listSave(element: tscost_list) {
    this.tscost_listService.FormData = element;
    this.NotificationService.warn(this.tscost_listService.ComponentSaveAll(this.tscost_listSort, this.tscost_listPaginator));
  }
  tscost_listDelete(element: tscost_list) {
    this.tscost_listService.BaseParameter.ID = element.TSCOST_IDX;
    this.NotificationService.warn(this.tscost_listService.ComponentDeleteAll(this.tscost_listSort, this.tscost_listPaginator));
  }
  tscost_listAdd(element: tscost_list) {
    this.tscost_listService.FormData = element;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = environment.DialogConfigWidth;
    dialogConfig.data = { ID: 0 };
    const dialog = this.Dialog.open(tscost_listDetailComponent, dialogConfig);
    dialog.afterClosed().subscribe(() => {
      this.tscost_listSearch();
    });
  }
}
