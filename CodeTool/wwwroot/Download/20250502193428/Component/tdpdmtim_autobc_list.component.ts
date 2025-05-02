import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { tdpdmtim_autobc_list } from 'src/app/shared/MES/tdpdmtim_autobc_list.model';
import { tdpdmtim_autobc_listService } from 'src/app/shared/MES/tdpdmtim_autobc_list.service';

@Component({
  selector: 'app-tdpdmtim_autobc_list',
  templateUrl: './tdpdmtim_autobc_list.component.html',
  styleUrls: ['./tdpdmtim_autobc_list.component.css']
})
export class tdpdmtim_autobc_listComponent implements OnInit {

  @ViewChild('tdpdmtim_autobc_listSort') tdpdmtim_autobc_listSort: MatSort;
  @ViewChild('tdpdmtim_autobc_listPaginator') tdpdmtim_autobc_listPaginator: MatPaginator;

  constructor(
    public Dialog: MatDialog,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public tdpdmtim_autobc_listService: tdpdmtim_autobc_listService,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.tdpdmtim_autobc_listSearch();
  }
  tdpdmtim_autobc_listSearch() {
    this.tdpdmtim_autobc_listService.SearchAll(this.tdpdmtim_autobc_listSort, this.tdpdmtim_autobc_listPaginator);
  }
  tdpdmtim_autobc_listSave(element: tdpdmtim_autobc_list) {
    this.tdpdmtim_autobc_listService.FormData = element;
    this.NotificationService.warn(this.tdpdmtim_autobc_listService.ComponentSaveAll(this.tdpdmtim_autobc_listSort, this.tdpdmtim_autobc_listPaginator));
  }
  tdpdmtim_autobc_listDelete(element: tdpdmtim_autobc_list) {
    this.tdpdmtim_autobc_listService.BaseParameter.ID = element.PDMTINABC_IDX;
    this.NotificationService.warn(this.tdpdmtim_autobc_listService.ComponentDeleteAll(this.tdpdmtim_autobc_listSort, this.tdpdmtim_autobc_listPaginator));
  }
  tdpdmtim_autobc_listAdd(element: tdpdmtim_autobc_list) {
    this.tdpdmtim_autobc_listService.FormData = element;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = environment.DialogConfigWidth;
    dialogConfig.data = { ID: 0 };
    const dialog = this.Dialog.open(tdpdmtim_autobc_listDetailComponent, dialogConfig);
    dialog.afterClosed().subscribe(() => {
      this.tdpdmtim_autobc_listSearch();
    });
  }
}
