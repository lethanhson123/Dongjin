import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { tsauth } from 'src/app/shared/MES/tsauth.model';
import { tsauthService } from 'src/app/shared/MES/tsauth.service';

@Component({
  selector: 'app-tsauth',
  templateUrl: './tsauth.component.html',
  styleUrls: ['./tsauth.component.css']
})
export class tsauthComponent implements OnInit {

  @ViewChild('tsauthSort') tsauthSort: MatSort;
  @ViewChild('tsauthPaginator') tsauthPaginator: MatPaginator;

  constructor(
    public Dialog: MatDialog,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public tsauthService: tsauthService,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.tsauthSearch();
  }
  tsauthSearch() {
    this.tsauthService.SearchAll(this.tsauthSort, this.tsauthPaginator);
  }
  tsauthSave(element: tsauth) {
    this.tsauthService.FormData = element;
    this.NotificationService.warn(this.tsauthService.ComponentSaveAll(this.tsauthSort, this.tsauthPaginator));
  }
  tsauthDelete(element: tsauth) {
    this.tsauthService.BaseParameter.ID = element.AUTH_IDX;
    this.NotificationService.warn(this.tsauthService.ComponentDeleteAll(this.tsauthSort, this.tsauthPaginator));
  }
  tsauthAdd(element: tsauth) {
    this.tsauthService.FormData = element;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = environment.DialogConfigWidth;
    dialogConfig.data = { ID: 0 };
    const dialog = this.Dialog.open(tsauthDetailComponent, dialogConfig);
    dialog.afterClosed().subscribe(() => {
      this.tsauthSearch();
    });
  }
}
