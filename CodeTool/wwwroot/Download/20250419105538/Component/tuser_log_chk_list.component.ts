import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { tuser_log_chk_list } from 'src/app/shared/MES/tuser_log_chk_list.model';
import { tuser_log_chk_listService } from 'src/app/shared/MES/tuser_log_chk_list.service';

@Component({
  selector: 'app-tuser_log_chk_list',
  templateUrl: './tuser_log_chk_list.component.html',
  styleUrls: ['./tuser_log_chk_list.component.css']
})
export class tuser_log_chk_listComponent implements OnInit {

  @ViewChild('tuser_log_chk_listSort') tuser_log_chk_listSort: MatSort;
  @ViewChild('tuser_log_chk_listPaginator') tuser_log_chk_listPaginator: MatPaginator;

  constructor(
    public Dialog: MatDialog,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public tuser_log_chk_listService: tuser_log_chk_listService,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.tuser_log_chk_listSearch();
  }
  tuser_log_chk_listSearch() {
    this.tuser_log_chk_listService.SearchAll(this.tuser_log_chk_listSort, this.tuser_log_chk_listPaginator);
  }
  tuser_log_chk_listSave(element: tuser_log_chk_list) {
    this.tuser_log_chk_listService.FormData = element;
    this.NotificationService.warn(this.tuser_log_chk_listService.ComponentSaveAll(this.tuser_log_chk_listSort, this.tuser_log_chk_listPaginator));
  }
  tuser_log_chk_listDelete(element: tuser_log_chk_list) {
    this.tuser_log_chk_listService.BaseParameter.ID = element.TUSER_IDX;
    this.NotificationService.warn(this.tuser_log_chk_listService.ComponentDeleteAll(this.tuser_log_chk_listSort, this.tuser_log_chk_listPaginator));
  }
  tuser_log_chk_listAdd(element: tuser_log_chk_list) {
    this.tuser_log_chk_listService.FormData = element;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = environment.DialogConfigWidth;
    dialogConfig.data = { ID: 0 };
    const dialog = this.Dialog.open(tuser_log_chk_listDetailComponent, dialogConfig);
    dialog.afterClosed().subscribe(() => {
      this.tuser_log_chk_listSearch();
    });
  }
}
