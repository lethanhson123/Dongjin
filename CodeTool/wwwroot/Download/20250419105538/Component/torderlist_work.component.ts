import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { torderlist_work } from 'src/app/shared/MES/torderlist_work.model';
import { torderlist_workService } from 'src/app/shared/MES/torderlist_work.service';

@Component({
  selector: 'app-torderlist_work',
  templateUrl: './torderlist_work.component.html',
  styleUrls: ['./torderlist_work.component.css']
})
export class torderlist_workComponent implements OnInit {

  @ViewChild('torderlist_workSort') torderlist_workSort: MatSort;
  @ViewChild('torderlist_workPaginator') torderlist_workPaginator: MatPaginator;

  constructor(
    public Dialog: MatDialog,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public torderlist_workService: torderlist_workService,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.torderlist_workSearch();
  }
  torderlist_workSearch() {
    this.torderlist_workService.SearchAll(this.torderlist_workSort, this.torderlist_workPaginator);
  }
  torderlist_workSave(element: torderlist_work) {
    this.torderlist_workService.FormData = element;
    this.NotificationService.warn(this.torderlist_workService.ComponentSaveAll(this.torderlist_workSort, this.torderlist_workPaginator));
  }
  torderlist_workDelete(element: torderlist_work) {
    this.torderlist_workService.BaseParameter.ID = element.TORDERLIST_WORK_IDX;
    this.NotificationService.warn(this.torderlist_workService.ComponentDeleteAll(this.torderlist_workSort, this.torderlist_workPaginator));
  }
  torderlist_workAdd(element: torderlist_work) {
    this.torderlist_workService.FormData = element;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = environment.DialogConfigWidth;
    dialogConfig.data = { ID: 0 };
    const dialog = this.Dialog.open(torderlist_workDetailComponent, dialogConfig);
    dialog.afterClosed().subscribe(() => {
      this.torderlist_workSearch();
    });
  }
}
