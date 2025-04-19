import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { tsuser } from 'src/app/shared/MES/tsuser.model';
import { tsuserService } from 'src/app/shared/MES/tsuser.service';

@Component({
  selector: 'app-tsuser',
  templateUrl: './tsuser.component.html',
  styleUrls: ['./tsuser.component.css']
})
export class tsuserComponent implements OnInit {

  @ViewChild('tsuserSort') tsuserSort: MatSort;
  @ViewChild('tsuserPaginator') tsuserPaginator: MatPaginator;

  constructor(
    public Dialog: MatDialog,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public tsuserService: tsuserService,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.tsuserSearch();
  }
  tsuserSearch() {
    this.tsuserService.SearchAll(this.tsuserSort, this.tsuserPaginator);
  }
  tsuserSave(element: tsuser) {
    this.tsuserService.FormData = element;
    this.NotificationService.warn(this.tsuserService.ComponentSaveAll(this.tsuserSort, this.tsuserPaginator));
  }
  tsuserDelete(element: tsuser) {
    this.tsuserService.BaseParameter.ID = element.USER_IDX;
    this.NotificationService.warn(this.tsuserService.ComponentDeleteAll(this.tsuserSort, this.tsuserPaginator));
  }
  tsuserAdd(element: tsuser) {
    this.tsuserService.FormData = element;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = environment.DialogConfigWidth;
    dialogConfig.data = { ID: 0 };
    const dialog = this.Dialog.open(tsuserDetailComponent, dialogConfig);
    dialog.afterClosed().subscribe(() => {
      this.tsuserSearch();
    });
  }
}
