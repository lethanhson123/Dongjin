import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { apqp_dlylst } from 'src/app/shared/MES/apqp_dlylst.model';
import { apqp_dlylstService } from 'src/app/shared/MES/apqp_dlylst.service';

@Component({
  selector: 'app-apqp_dlylst',
  templateUrl: './apqp_dlylst.component.html',
  styleUrls: ['./apqp_dlylst.component.css']
})
export class apqp_dlylstComponent implements OnInit {

  @ViewChild('apqp_dlylstSort') apqp_dlylstSort: MatSort;
  @ViewChild('apqp_dlylstPaginator') apqp_dlylstPaginator: MatPaginator;

  constructor(
    public Dialog: MatDialog,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public apqp_dlylstService: apqp_dlylstService,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.apqp_dlylstSearch();
  }
  apqp_dlylstSearch() {
    this.apqp_dlylstService.SearchAll(this.apqp_dlylstSort, this.apqp_dlylstPaginator);
  }
  apqp_dlylstSave(element: apqp_dlylst) {
    this.apqp_dlylstService.FormData = element;
    this.NotificationService.warn(this.apqp_dlylstService.ComponentSaveAll(this.apqp_dlylstSort, this.apqp_dlylstPaginator));
  }
  apqp_dlylstDelete(element: apqp_dlylst) {
    this.apqp_dlylstService.BaseParameter.ID = element.APQP_DLYLST_IDX;
    this.NotificationService.warn(this.apqp_dlylstService.ComponentDeleteAll(this.apqp_dlylstSort, this.apqp_dlylstPaginator));
  }
  apqp_dlylstAdd(element: apqp_dlylst) {
    this.apqp_dlylstService.FormData = element;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = environment.DialogConfigWidth;
    dialogConfig.data = { ID: 0 };
    const dialog = this.Dialog.open(apqp_dlylstDetailComponent, dialogConfig);
    dialog.afterClosed().subscribe(() => {
      this.apqp_dlylstSearch();
    });
  }
}
