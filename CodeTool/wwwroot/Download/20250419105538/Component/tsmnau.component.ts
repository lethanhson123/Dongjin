import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { tsmnau } from 'src/app/shared/MES/tsmnau.model';
import { tsmnauService } from 'src/app/shared/MES/tsmnau.service';

@Component({
  selector: 'app-tsmnau',
  templateUrl: './tsmnau.component.html',
  styleUrls: ['./tsmnau.component.css']
})
export class tsmnauComponent implements OnInit {

  @ViewChild('tsmnauSort') tsmnauSort: MatSort;
  @ViewChild('tsmnauPaginator') tsmnauPaginator: MatPaginator;

  constructor(
    public Dialog: MatDialog,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public tsmnauService: tsmnauService,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.tsmnauSearch();
  }
  tsmnauSearch() {
    this.tsmnauService.SearchAll(this.tsmnauSort, this.tsmnauPaginator);
  }
  tsmnauSave(element: tsmnau) {
    this.tsmnauService.FormData = element;
    this.NotificationService.warn(this.tsmnauService.ComponentSaveAll(this.tsmnauSort, this.tsmnauPaginator));
  }
  tsmnauDelete(element: tsmnau) {
    this.tsmnauService.BaseParameter.ID = element.MENU_AUTH_IDX;
    this.NotificationService.warn(this.tsmnauService.ComponentDeleteAll(this.tsmnauSort, this.tsmnauPaginator));
  }
  tsmnauAdd(element: tsmnau) {
    this.tsmnauService.FormData = element;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = environment.DialogConfigWidth;
    dialogConfig.data = { ID: 0 };
    const dialog = this.Dialog.open(tsmnauDetailComponent, dialogConfig);
    dialog.afterClosed().subscribe(() => {
      this.tsmnauSearch();
    });
  }
}
