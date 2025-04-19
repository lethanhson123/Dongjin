import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { tspart_ecn } from 'src/app/shared/MES/tspart_ecn.model';
import { tspart_ecnService } from 'src/app/shared/MES/tspart_ecn.service';

@Component({
  selector: 'app-tspart_ecn',
  templateUrl: './tspart_ecn.component.html',
  styleUrls: ['./tspart_ecn.component.css']
})
export class tspart_ecnComponent implements OnInit {

  @ViewChild('tspart_ecnSort') tspart_ecnSort: MatSort;
  @ViewChild('tspart_ecnPaginator') tspart_ecnPaginator: MatPaginator;

  constructor(
    public Dialog: MatDialog,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public tspart_ecnService: tspart_ecnService,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.tspart_ecnSearch();
  }
  tspart_ecnSearch() {
    this.tspart_ecnService.SearchAll(this.tspart_ecnSort, this.tspart_ecnPaginator);
  }
  tspart_ecnSave(element: tspart_ecn) {
    this.tspart_ecnService.FormData = element;
    this.NotificationService.warn(this.tspart_ecnService.ComponentSaveAll(this.tspart_ecnSort, this.tspart_ecnPaginator));
  }
  tspart_ecnDelete(element: tspart_ecn) {
    this.tspart_ecnService.BaseParameter.ID = element.PARTECN_IDX;
    this.NotificationService.warn(this.tspart_ecnService.ComponentDeleteAll(this.tspart_ecnSort, this.tspart_ecnPaginator));
  }
  tspart_ecnAdd(element: tspart_ecn) {
    this.tspart_ecnService.FormData = element;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = environment.DialogConfigWidth;
    dialogConfig.data = { ID: 0 };
    const dialog = this.Dialog.open(tspart_ecnDetailComponent, dialogConfig);
    dialog.afterClosed().subscribe(() => {
      this.tspart_ecnSearch();
    });
  }
}
