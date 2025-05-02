import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { tsnon_worktime } from 'src/app/shared/MES/tsnon_worktime.model';
import { tsnon_worktimeService } from 'src/app/shared/MES/tsnon_worktime.service';

@Component({
  selector: 'app-tsnon_worktime',
  templateUrl: './tsnon_worktime.component.html',
  styleUrls: ['./tsnon_worktime.component.css']
})
export class tsnon_worktimeComponent implements OnInit {

  @ViewChild('tsnon_worktimeSort') tsnon_worktimeSort: MatSort;
  @ViewChild('tsnon_worktimePaginator') tsnon_worktimePaginator: MatPaginator;

  constructor(
    public Dialog: MatDialog,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public tsnon_worktimeService: tsnon_worktimeService,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.tsnon_worktimeSearch();
  }
  tsnon_worktimeSearch() {
    this.tsnon_worktimeService.SearchAll(this.tsnon_worktimeSort, this.tsnon_worktimePaginator);
  }
  tsnon_worktimeSave(element: tsnon_worktime) {
    this.tsnon_worktimeService.FormData = element;
    this.NotificationService.warn(this.tsnon_worktimeService.ComponentSaveAll(this.tsnon_worktimeSort, this.tsnon_worktimePaginator));
  }
  tsnon_worktimeDelete(element: tsnon_worktime) {
    this.tsnon_worktimeService.BaseParameter.ID = element.TSNON_WT_IDX;
    this.NotificationService.warn(this.tsnon_worktimeService.ComponentDeleteAll(this.tsnon_worktimeSort, this.tsnon_worktimePaginator));
  }
  tsnon_worktimeAdd(element: tsnon_worktime) {
    this.tsnon_worktimeService.FormData = element;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = environment.DialogConfigWidth;
    dialogConfig.data = { ID: 0 };
    const dialog = this.Dialog.open(tsnon_worktimeDetailComponent, dialogConfig);
    dialog.afterClosed().subscribe(() => {
      this.tsnon_worktimeSearch();
    });
  }
}
