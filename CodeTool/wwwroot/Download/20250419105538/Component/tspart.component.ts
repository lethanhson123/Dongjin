import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { tspart } from 'src/app/shared/MES/tspart.model';
import { tspartService } from 'src/app/shared/MES/tspart.service';

@Component({
  selector: 'app-tspart',
  templateUrl: './tspart.component.html',
  styleUrls: ['./tspart.component.css']
})
export class tspartComponent implements OnInit {

  @ViewChild('tspartSort') tspartSort: MatSort;
  @ViewChild('tspartPaginator') tspartPaginator: MatPaginator;

  constructor(
    public Dialog: MatDialog,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public tspartService: tspartService,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.tspartSearch();
  }
  tspartSearch() {
    this.tspartService.SearchAll(this.tspartSort, this.tspartPaginator);
  }
  tspartSave(element: tspart) {
    this.tspartService.FormData = element;
    this.NotificationService.warn(this.tspartService.ComponentSaveAll(this.tspartSort, this.tspartPaginator));
  }
  tspartDelete(element: tspart) {
    this.tspartService.BaseParameter.ID = element.PART_IDX;
    this.NotificationService.warn(this.tspartService.ComponentDeleteAll(this.tspartSort, this.tspartPaginator));
  }
  tspartAdd(element: tspart) {
    this.tspartService.FormData = element;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = environment.DialogConfigWidth;
    dialogConfig.data = { ID: 0 };
    const dialog = this.Dialog.open(tspartDetailComponent, dialogConfig);
    dialog.afterClosed().subscribe(() => {
      this.tspartSearch();
    });
  }
}
