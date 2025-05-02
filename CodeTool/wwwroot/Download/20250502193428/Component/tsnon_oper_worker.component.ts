import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { tsnon_oper_worker } from 'src/app/shared/MES/tsnon_oper_worker.model';
import { tsnon_oper_workerService } from 'src/app/shared/MES/tsnon_oper_worker.service';

@Component({
  selector: 'app-tsnon_oper_worker',
  templateUrl: './tsnon_oper_worker.component.html',
  styleUrls: ['./tsnon_oper_worker.component.css']
})
export class tsnon_oper_workerComponent implements OnInit {

  @ViewChild('tsnon_oper_workerSort') tsnon_oper_workerSort: MatSort;
  @ViewChild('tsnon_oper_workerPaginator') tsnon_oper_workerPaginator: MatPaginator;

  constructor(
    public Dialog: MatDialog,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public tsnon_oper_workerService: tsnon_oper_workerService,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.tsnon_oper_workerSearch();
  }
  tsnon_oper_workerSearch() {
    this.tsnon_oper_workerService.SearchAll(this.tsnon_oper_workerSort, this.tsnon_oper_workerPaginator);
  }
  tsnon_oper_workerSave(element: tsnon_oper_worker) {
    this.tsnon_oper_workerService.FormData = element;
    this.NotificationService.warn(this.tsnon_oper_workerService.ComponentSaveAll(this.tsnon_oper_workerSort, this.tsnon_oper_workerPaginator));
  }
  tsnon_oper_workerDelete(element: tsnon_oper_worker) {
    this.tsnon_oper_workerService.BaseParameter.ID = element.TSNON_OPER_IDX;
    this.NotificationService.warn(this.tsnon_oper_workerService.ComponentDeleteAll(this.tsnon_oper_workerSort, this.tsnon_oper_workerPaginator));
  }
  tsnon_oper_workerAdd(element: tsnon_oper_worker) {
    this.tsnon_oper_workerService.FormData = element;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = environment.DialogConfigWidth;
    dialogConfig.data = { ID: 0 };
    const dialog = this.Dialog.open(tsnon_oper_workerDetailComponent, dialogConfig);
    dialog.afterClosed().subscribe(() => {
      this.tsnon_oper_workerSearch();
    });
  }
}
