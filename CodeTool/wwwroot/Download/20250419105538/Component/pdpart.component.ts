import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { pdpart } from 'src/app/shared/MES/pdpart.model';
import { pdpartService } from 'src/app/shared/MES/pdpart.service';

@Component({
  selector: 'app-pdpart',
  templateUrl: './pdpart.component.html',
  styleUrls: ['./pdpart.component.css']
})
export class pdpartComponent implements OnInit {

  @ViewChild('pdpartSort') pdpartSort: MatSort;
  @ViewChild('pdpartPaginator') pdpartPaginator: MatPaginator;

  constructor(
    public Dialog: MatDialog,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public pdpartService: pdpartService,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.pdpartSearch();
  }
  pdpartSearch() {
    this.pdpartService.SearchAll(this.pdpartSort, this.pdpartPaginator);
  }
  pdpartSave(element: pdpart) {
    this.pdpartService.FormData = element;
    this.NotificationService.warn(this.pdpartService.ComponentSaveAll(this.pdpartSort, this.pdpartPaginator));
  }
  pdpartDelete(element: pdpart) {
    this.pdpartService.BaseParameter.ID = element.PDPART_IDX;
    this.NotificationService.warn(this.pdpartService.ComponentDeleteAll(this.pdpartSort, this.pdpartPaginator));
  }
  pdpartAdd(element: pdpart) {
    this.pdpartService.FormData = element;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = environment.DialogConfigWidth;
    dialogConfig.data = { ID: 0 };
    const dialog = this.Dialog.open(pdpartDetailComponent, dialogConfig);
    dialog.afterClosed().subscribe(() => {
      this.pdpartSearch();
    });
  }
}
