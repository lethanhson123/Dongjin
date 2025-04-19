import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { tiivtr_history } from 'src/app/shared/MES/tiivtr_history.model';
import { tiivtr_historyService } from 'src/app/shared/MES/tiivtr_history.service';

@Component({
  selector: 'app-tiivtr_history',
  templateUrl: './tiivtr_history.component.html',
  styleUrls: ['./tiivtr_history.component.css']
})
export class tiivtr_historyComponent implements OnInit {

  @ViewChild('tiivtr_historySort') tiivtr_historySort: MatSort;
  @ViewChild('tiivtr_historyPaginator') tiivtr_historyPaginator: MatPaginator;

  constructor(
    public Dialog: MatDialog,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public tiivtr_historyService: tiivtr_historyService,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.tiivtr_historySearch();
  }
  tiivtr_historySearch() {
    this.tiivtr_historyService.SearchAll(this.tiivtr_historySort, this.tiivtr_historyPaginator);
  }
  tiivtr_historySave(element: tiivtr_history) {
    this.tiivtr_historyService.FormData = element;
    this.NotificationService.warn(this.tiivtr_historyService.ComponentSaveAll(this.tiivtr_historySort, this.tiivtr_historyPaginator));
  }
  tiivtr_historyDelete(element: tiivtr_history) {
    this.tiivtr_historyService.BaseParameter.ID = element.IV_IDX;
    this.NotificationService.warn(this.tiivtr_historyService.ComponentDeleteAll(this.tiivtr_historySort, this.tiivtr_historyPaginator));
  }
  tiivtr_historyAdd(element: tiivtr_history) {
    this.tiivtr_historyService.FormData = element;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = environment.DialogConfigWidth;
    dialogConfig.data = { ID: 0 };
    const dialog = this.Dialog.open(tiivtr_historyDetailComponent, dialogConfig);
    dialog.afterClosed().subscribe(() => {
      this.tiivtr_historySearch();
    });
  }
}
