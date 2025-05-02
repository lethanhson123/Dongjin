import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { tmmtin_dmm_app } from 'src/app/shared/MES/tmmtin_dmm_app.model';
import { tmmtin_dmm_appService } from 'src/app/shared/MES/tmmtin_dmm_app.service';

@Component({
  selector: 'app-tmmtin_dmm_app',
  templateUrl: './tmmtin_dmm_app.component.html',
  styleUrls: ['./tmmtin_dmm_app.component.css']
})
export class tmmtin_dmm_appComponent implements OnInit {

  @ViewChild('tmmtin_dmm_appSort') tmmtin_dmm_appSort: MatSort;
  @ViewChild('tmmtin_dmm_appPaginator') tmmtin_dmm_appPaginator: MatPaginator;

  constructor(
    public Dialog: MatDialog,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public tmmtin_dmm_appService: tmmtin_dmm_appService,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.tmmtin_dmm_appSearch();
  }
  tmmtin_dmm_appSearch() {
    this.tmmtin_dmm_appService.SearchAll(this.tmmtin_dmm_appSort, this.tmmtin_dmm_appPaginator);
  }
  tmmtin_dmm_appSave(element: tmmtin_dmm_app) {
    this.tmmtin_dmm_appService.FormData = element;
    this.NotificationService.warn(this.tmmtin_dmm_appService.ComponentSaveAll(this.tmmtin_dmm_appSort, this.tmmtin_dmm_appPaginator));
  }
  tmmtin_dmm_appDelete(element: tmmtin_dmm_app) {
    this.tmmtin_dmm_appService.BaseParameter.ID = element.TMMTIN_DMM_IDX;
    this.NotificationService.warn(this.tmmtin_dmm_appService.ComponentDeleteAll(this.tmmtin_dmm_appSort, this.tmmtin_dmm_appPaginator));
  }
  tmmtin_dmm_appAdd(element: tmmtin_dmm_app) {
    this.tmmtin_dmm_appService.FormData = element;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = environment.DialogConfigWidth;
    dialogConfig.data = { ID: 0 };
    const dialog = this.Dialog.open(tmmtin_dmm_appDetailComponent, dialogConfig);
    dialog.afterClosed().subscribe(() => {
      this.tmmtin_dmm_appSearch();
    });
  }
}
