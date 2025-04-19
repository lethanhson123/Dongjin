import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { tuser_log_chk } from 'src/app/shared/MES/tuser_log_chk.model';
import { tuser_log_chkService } from 'src/app/shared/MES/tuser_log_chk.service';

@Component({
  selector: 'app-tuser_log_chk',
  templateUrl: './tuser_log_chk.component.html',
  styleUrls: ['./tuser_log_chk.component.css']
})
export class tuser_log_chkComponent implements OnInit {

  @ViewChild('tuser_log_chkSort') tuser_log_chkSort: MatSort;
  @ViewChild('tuser_log_chkPaginator') tuser_log_chkPaginator: MatPaginator;

  constructor(
    public Dialog: MatDialog,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public tuser_log_chkService: tuser_log_chkService,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.tuser_log_chkSearch();
  }
  tuser_log_chkSearch() {
    this.tuser_log_chkService.SearchAll(this.tuser_log_chkSort, this.tuser_log_chkPaginator);
  }
  tuser_log_chkSave(element: tuser_log_chk) {
    this.tuser_log_chkService.FormData = element;
    this.NotificationService.warn(this.tuser_log_chkService.ComponentSaveAll(this.tuser_log_chkSort, this.tuser_log_chkPaginator));
  }
  tuser_log_chkDelete(element: tuser_log_chk) {
    this.tuser_log_chkService.BaseParameter.ID = element.TUSER_IDX;
    this.NotificationService.warn(this.tuser_log_chkService.ComponentDeleteAll(this.tuser_log_chkSort, this.tuser_log_chkPaginator));
  }
  tuser_log_chkAdd(element: tuser_log_chk) {
    this.tuser_log_chkService.FormData = element;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = environment.DialogConfigWidth;
    dialogConfig.data = { ID: 0 };
    const dialog = this.Dialog.open(tuser_log_chkDetailComponent, dialogConfig);
    dialog.afterClosed().subscribe(() => {
      this.tuser_log_chkSearch();
    });
  }
}
