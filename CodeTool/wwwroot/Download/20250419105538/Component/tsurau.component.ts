import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { tsurau } from 'src/app/shared/MES/tsurau.model';
import { tsurauService } from 'src/app/shared/MES/tsurau.service';

@Component({
  selector: 'app-tsurau',
  templateUrl: './tsurau.component.html',
  styleUrls: ['./tsurau.component.css']
})
export class tsurauComponent implements OnInit {

  @ViewChild('tsurauSort') tsurauSort: MatSort;
  @ViewChild('tsurauPaginator') tsurauPaginator: MatPaginator;

  constructor(
    public Dialog: MatDialog,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public tsurauService: tsurauService,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.tsurauSearch();
  }
  tsurauSearch() {
    this.tsurauService.SearchAll(this.tsurauSort, this.tsurauPaginator);
  }
  tsurauSave(element: tsurau) {
    this.tsurauService.FormData = element;
    this.NotificationService.warn(this.tsurauService.ComponentSaveAll(this.tsurauSort, this.tsurauPaginator));
  }
  tsurauDelete(element: tsurau) {
    this.tsurauService.BaseParameter.ID = element.USER_AUTH_IDX;
    this.NotificationService.warn(this.tsurauService.ComponentDeleteAll(this.tsurauSort, this.tsurauPaginator));
  }
  tsurauAdd(element: tsurau) {
    this.tsurauService.FormData = element;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = environment.DialogConfigWidth;
    dialogConfig.data = { ID: 0 };
    const dialog = this.Dialog.open(tsurauDetailComponent, dialogConfig);
    dialog.afterClosed().subscribe(() => {
      this.tsurauSearch();
    });
  }
}
