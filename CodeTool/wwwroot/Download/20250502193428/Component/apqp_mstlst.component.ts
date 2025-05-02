import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { apqp_mstlst } from 'src/app/shared/MES/apqp_mstlst.model';
import { apqp_mstlstService } from 'src/app/shared/MES/apqp_mstlst.service';

@Component({
  selector: 'app-apqp_mstlst',
  templateUrl: './apqp_mstlst.component.html',
  styleUrls: ['./apqp_mstlst.component.css']
})
export class apqp_mstlstComponent implements OnInit {

  @ViewChild('apqp_mstlstSort') apqp_mstlstSort: MatSort;
  @ViewChild('apqp_mstlstPaginator') apqp_mstlstPaginator: MatPaginator;

  constructor(
    public Dialog: MatDialog,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public apqp_mstlstService: apqp_mstlstService,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.apqp_mstlstSearch();
  }
  apqp_mstlstSearch() {
    this.apqp_mstlstService.SearchAll(this.apqp_mstlstSort, this.apqp_mstlstPaginator);
  }
  apqp_mstlstSave(element: apqp_mstlst) {
    this.apqp_mstlstService.FormData = element;
    this.NotificationService.warn(this.apqp_mstlstService.ComponentSaveAll(this.apqp_mstlstSort, this.apqp_mstlstPaginator));
  }
  apqp_mstlstDelete(element: apqp_mstlst) {
    this.apqp_mstlstService.BaseParameter.ID = element.APQP_MS_IDX;
    this.NotificationService.warn(this.apqp_mstlstService.ComponentDeleteAll(this.apqp_mstlstSort, this.apqp_mstlstPaginator));
  }
  apqp_mstlstAdd(element: apqp_mstlst) {
    this.apqp_mstlstService.FormData = element;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = environment.DialogConfigWidth;
    dialogConfig.data = { ID: 0 };
    const dialog = this.Dialog.open(apqp_mstlstDetailComponent, dialogConfig);
    dialog.afterClosed().subscribe(() => {
      this.apqp_mstlstSearch();
    });
  }
}
