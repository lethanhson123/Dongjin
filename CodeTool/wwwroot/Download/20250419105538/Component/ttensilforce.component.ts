import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { ttensilforce } from 'src/app/shared/MES/ttensilforce.model';
import { ttensilforceService } from 'src/app/shared/MES/ttensilforce.service';

@Component({
  selector: 'app-ttensilforce',
  templateUrl: './ttensilforce.component.html',
  styleUrls: ['./ttensilforce.component.css']
})
export class ttensilforceComponent implements OnInit {

  @ViewChild('ttensilforceSort') ttensilforceSort: MatSort;
  @ViewChild('ttensilforcePaginator') ttensilforcePaginator: MatPaginator;

  constructor(
    public Dialog: MatDialog,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public ttensilforceService: ttensilforceService,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.ttensilforceSearch();
  }
  ttensilforceSearch() {
    this.ttensilforceService.SearchAll(this.ttensilforceSort, this.ttensilforcePaginator);
  }
  ttensilforceSave(element: ttensilforce) {
    this.ttensilforceService.FormData = element;
    this.NotificationService.warn(this.ttensilforceService.ComponentSaveAll(this.ttensilforceSort, this.ttensilforcePaginator));
  }
  ttensilforceDelete(element: ttensilforce) {
    this.ttensilforceService.BaseParameter.ID = element.FORCE_IDX;
    this.NotificationService.warn(this.ttensilforceService.ComponentDeleteAll(this.ttensilforceSort, this.ttensilforcePaginator));
  }
  ttensilforceAdd(element: ttensilforce) {
    this.ttensilforceService.FormData = element;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = environment.DialogConfigWidth;
    dialogConfig.data = { ID: 0 };
    const dialog = this.Dialog.open(ttensilforceDetailComponent, dialogConfig);
    dialog.afterClosed().subscribe(() => {
      this.ttensilforceSearch();
    });
  }
}
