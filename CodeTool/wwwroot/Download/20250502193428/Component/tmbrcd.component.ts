import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { tmbrcd } from 'src/app/shared/MES/tmbrcd.model';
import { tmbrcdService } from 'src/app/shared/MES/tmbrcd.service';

@Component({
  selector: 'app-tmbrcd',
  templateUrl: './tmbrcd.component.html',
  styleUrls: ['./tmbrcd.component.css']
})
export class tmbrcdComponent implements OnInit {

  @ViewChild('tmbrcdSort') tmbrcdSort: MatSort;
  @ViewChild('tmbrcdPaginator') tmbrcdPaginator: MatPaginator;

  constructor(
    public Dialog: MatDialog,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public tmbrcdService: tmbrcdService,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.tmbrcdSearch();
  }
  tmbrcdSearch() {
    this.tmbrcdService.SearchAll(this.tmbrcdSort, this.tmbrcdPaginator);
  }
  tmbrcdSave(element: tmbrcd) {
    this.tmbrcdService.FormData = element;
    this.NotificationService.warn(this.tmbrcdService.ComponentSaveAll(this.tmbrcdSort, this.tmbrcdPaginator));
  }
  tmbrcdDelete(element: tmbrcd) {
    this.tmbrcdService.BaseParameter.ID = element.BARCD_IDX;
    this.NotificationService.warn(this.tmbrcdService.ComponentDeleteAll(this.tmbrcdSort, this.tmbrcdPaginator));
  }
  tmbrcdAdd(element: tmbrcd) {
    this.tmbrcdService.FormData = element;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = environment.DialogConfigWidth;
    dialogConfig.data = { ID: 0 };
    const dialog = this.Dialog.open(tmbrcdDetailComponent, dialogConfig);
    dialog.afterClosed().subscribe(() => {
      this.tmbrcdSearch();
    });
  }
}
