import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { pdpart_addlist } from 'src/app/shared/MES/pdpart_addlist.model';
import { pdpart_addlistService } from 'src/app/shared/MES/pdpart_addlist.service';

@Component({
  selector: 'app-pdpart_addlist',
  templateUrl: './pdpart_addlist.component.html',
  styleUrls: ['./pdpart_addlist.component.css']
})
export class pdpart_addlistComponent implements OnInit {

  @ViewChild('pdpart_addlistSort') pdpart_addlistSort: MatSort;
  @ViewChild('pdpart_addlistPaginator') pdpart_addlistPaginator: MatPaginator;

  constructor(
    public Dialog: MatDialog,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public pdpart_addlistService: pdpart_addlistService,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.pdpart_addlistSearch();
  }
  pdpart_addlistSearch() {
    this.pdpart_addlistService.SearchAll(this.pdpart_addlistSort, this.pdpart_addlistPaginator);
  }
  pdpart_addlistSave(element: pdpart_addlist) {
    this.pdpart_addlistService.FormData = element;
    this.NotificationService.warn(this.pdpart_addlistService.ComponentSaveAll(this.pdpart_addlistSort, this.pdpart_addlistPaginator));
  }
  pdpart_addlistDelete(element: pdpart_addlist) {
    this.pdpart_addlistService.BaseParameter.ID = element.PDPART_AL_IDX;
    this.NotificationService.warn(this.pdpart_addlistService.ComponentDeleteAll(this.pdpart_addlistSort, this.pdpart_addlistPaginator));
  }
  pdpart_addlistAdd(element: pdpart_addlist) {
    this.pdpart_addlistService.FormData = element;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = environment.DialogConfigWidth;
    dialogConfig.data = { ID: 0 };
    const dialog = this.Dialog.open(pdpart_addlistDetailComponent, dialogConfig);
    dialog.afterClosed().subscribe(() => {
      this.pdpart_addlistSearch();
    });
  }
}
