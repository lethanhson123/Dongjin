import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { apqp_filelst } from 'src/app/shared/MES/apqp_filelst.model';
import { apqp_filelstService } from 'src/app/shared/MES/apqp_filelst.service';

@Component({
  selector: 'app-apqp_filelst',
  templateUrl: './apqp_filelst.component.html',
  styleUrls: ['./apqp_filelst.component.css']
})
export class apqp_filelstComponent implements OnInit {

  @ViewChild('apqp_filelstSort') apqp_filelstSort: MatSort;
  @ViewChild('apqp_filelstPaginator') apqp_filelstPaginator: MatPaginator;

  constructor(
    public Dialog: MatDialog,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public apqp_filelstService: apqp_filelstService,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.apqp_filelstSearch();
  }
  apqp_filelstSearch() {
    this.apqp_filelstService.SearchAll(this.apqp_filelstSort, this.apqp_filelstPaginator);
  }
  apqp_filelstSave(element: apqp_filelst) {
    this.apqp_filelstService.FormData = element;
    this.NotificationService.warn(this.apqp_filelstService.ComponentSaveAll(this.apqp_filelstSort, this.apqp_filelstPaginator));
  }
  apqp_filelstDelete(element: apqp_filelst) {
    this.apqp_filelstService.BaseParameter.ID = element.APQP_FLLST_IDX;
    this.NotificationService.warn(this.apqp_filelstService.ComponentDeleteAll(this.apqp_filelstSort, this.apqp_filelstPaginator));
  }
  apqp_filelstAdd(element: apqp_filelst) {
    this.apqp_filelstService.FormData = element;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = environment.DialogConfigWidth;
    dialogConfig.data = { ID: 0 };
    const dialog = this.Dialog.open(apqp_filelstDetailComponent, dialogConfig);
    dialog.afterClosed().subscribe(() => {
      this.apqp_filelstSearch();
    });
  }
}
