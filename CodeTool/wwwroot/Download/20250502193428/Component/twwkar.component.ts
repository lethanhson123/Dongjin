import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { twwkar } from 'src/app/shared/MES/twwkar.model';
import { twwkarService } from 'src/app/shared/MES/twwkar.service';

@Component({
  selector: 'app-twwkar',
  templateUrl: './twwkar.component.html',
  styleUrls: ['./twwkar.component.css']
})
export class twwkarComponent implements OnInit {

  @ViewChild('twwkarSort') twwkarSort: MatSort;
  @ViewChild('twwkarPaginator') twwkarPaginator: MatPaginator;

  constructor(
    public Dialog: MatDialog,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public twwkarService: twwkarService,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.twwkarSearch();
  }
  twwkarSearch() {
    this.twwkarService.SearchAll(this.twwkarSort, this.twwkarPaginator);
  }
  twwkarSave(element: twwkar) {
    this.twwkarService.FormData = element;
    this.NotificationService.warn(this.twwkarService.ComponentSaveAll(this.twwkarSort, this.twwkarPaginator));
  }
  twwkarDelete(element: twwkar) {
    this.twwkarService.BaseParameter.ID = element.WK_IDX;
    this.NotificationService.warn(this.twwkarService.ComponentDeleteAll(this.twwkarSort, this.twwkarPaginator));
  }
  twwkarAdd(element: twwkar) {
    this.twwkarService.FormData = element;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = environment.DialogConfigWidth;
    dialogConfig.data = { ID: 0 };
    const dialog = this.Dialog.open(twwkarDetailComponent, dialogConfig);
    dialog.afterClosed().subscribe(() => {
      this.twwkarSearch();
    });
  }
}
