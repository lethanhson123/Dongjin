import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { tworkresult } from 'src/app/shared/MES/tworkresult.model';
import { tworkresultService } from 'src/app/shared/MES/tworkresult.service';

@Component({
  selector: 'app-tworkresult',
  templateUrl: './tworkresult.component.html',
  styleUrls: ['./tworkresult.component.css']
})
export class tworkresultComponent implements OnInit {

  @ViewChild('tworkresultSort') tworkresultSort: MatSort;
  @ViewChild('tworkresultPaginator') tworkresultPaginator: MatPaginator;

  constructor(
    public Dialog: MatDialog,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public tworkresultService: tworkresultService,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.tworkresultSearch();
  }
  tworkresultSearch() {
    this.tworkresultService.SearchAll(this.tworkresultSort, this.tworkresultPaginator);
  }
  tworkresultSave(element: tworkresult) {
    this.tworkresultService.FormData = element;
    this.NotificationService.warn(this.tworkresultService.ComponentSaveAll(this.tworkresultSort, this.tworkresultPaginator));
  }
  tworkresultDelete(element: tworkresult) {
    this.tworkresultService.BaseParameter.ID = element.WORK_IDX;
    this.NotificationService.warn(this.tworkresultService.ComponentDeleteAll(this.tworkresultSort, this.tworkresultPaginator));
  }
  tworkresultAdd(element: tworkresult) {
    this.tworkresultService.FormData = element;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = environment.DialogConfigWidth;
    dialogConfig.data = { ID: 0 };
    const dialog = this.Dialog.open(tworkresultDetailComponent, dialogConfig);
    dialog.afterClosed().subscribe(() => {
      this.tworkresultSearch();
    });
  }
}
